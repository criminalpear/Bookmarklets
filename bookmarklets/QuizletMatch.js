(async () => {
  // Pull all term/definition pairs from the page's embedded set data (any set, any order)
  const nd = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
  const seen = new Set(), partner = new Map();
  const key = m => m.map(x => x.type === 2 ? 'img:' + x.url.split('?')[0].split('/').pop()
                                           : (x.plainText || '').trim()).filter(Boolean).join('|');
  const add = (a, b) => (partner.get(a) || partner.set(a, new Set()).get(a)).add(b);
  (function walk(o) {
    if (typeof o === 'string') {
      if ((o[0] === '{' || o[0] === '[') && o.includes('cardSides')) { try { walk(JSON.parse(o)); } catch {} }
      return;
    }
    if (o && typeof o === 'object') {
      if (Array.isArray(o.cardSides) && !seen.has(o.id)) {
        seen.add(o.id);
        const [a, b] = o.cardSides.map(s => key(s.media));
        add(a, b); add(b, a);
      }
      for (const k in o) walk(o[k]);
    }
  })(nd);

  const rk = (el, p) => { if (!el) return; const k = Object.keys(el).find(k => k.startsWith(p)); return k && el[k]; };
  // The game board component; its 4th hook holds the pair currently fading out (null = unlocked)
  const board = () => {
    let f = rk(document.querySelector('.FittedText, .ckkilcz'), '__reactFiber');
    while (f && !(f.memoizedProps && 'canMatchingBegin' in f.memoizedProps)) f = f.return;
    return f;
  };
  const locked = () => {
    const f = board();
    if (!f || !f.memoizedProps.canMatchingBegin) return true;
    let h = f.memoizedState; for (let j = 0; j < 3 && h; j++) h = h.next;
    return h && h.memoizedState !== null;
  };
  const status = t => { let f = rk(t, '__reactFiber'); for (let i = 0; i < 3 && f; i++) f = f.return; return f?.memoizedProps?.status; };
  const tiles = () => [...document.querySelectorAll('.FittedText, .ckkilcz')]
    .map(e => { let n = e; while (n && !rk(n, '__reactProps')?.onClick) n = n.parentElement; return n; })
    .filter((t, i, a) => t && a.indexOf(t) === i && t.offsetParent && status(t) !== 'correct');
  const tileKey = t => {
    const im = t.querySelector('.ckkilcz');
    if (im) { const m = getComputedStyle(im).backgroundImage.match(/\/([^\/?"]+)(\?|")/); return m ? 'img:' + m[1] : ''; }
    return (t.innerText || '').trim();
  };
  // Sub-millisecond yield (setTimeout clamps to ~4ms)
  const mc = new MessageChannel(), q = [];
  mc.port1.onmessage = () => q.shift()?.();
  const tick = () => new Promise(r => { q.push(r); mc.port2.postMessage(0); });

  // Works from the start screen or the leaderboard
  [...document.querySelectorAll('button')]
    .find(b => b.offsetParent && /start game|play again/i.test(b.innerText))?.click();
  let w = performance.now();
  while ((tiles().length < 2 || locked()) && performance.now() - w < 8000) await tick();

  for (let g = 0; g < 40; g++) {
    w = performance.now();
    while (locked() && performance.now() - w < 1000) await tick();   // wait out the 154ms fade lock
    const ts = tiles(); if (ts.length < 2) break;
    const ks = ts.map(tileKey);
    let a = -1, b = -1;
    for (let i = 0; i < ks.length && a < 0; i++) {
      const p = partner.get(ks[i]);
      const j = p ? ks.findIndex((k, jj) => jj !== i && p.has(k)) : -1;
      if (j >= 0) { a = i; b = j; }
    }
    if (a < 0) break;
    ts[a].click(); await tick(); ts[b].click();
    w = performance.now();
    while (!locked() && performance.now() - w < 50) await tick();     // confirm the match registered
  }
})();
