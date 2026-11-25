// DialedBot panel — paste into the console on dialed.gg, or run as a bookmarklet.
// Run it again to close the panel.
(() => {
  if (window.__dialedBot) { window.__dialedBot.destroy(); return; }

  const GAMES = [
    { id: 'color',      path: '/color',   label: 'color' },
    { id: 'color-toon', path: '/color2',  label: 'color-toon' },
    { id: 'sound',      path: '/sound',   label: 'sound' },
    { id: 'time',       path: '/time',    label: 'time' },
    { id: 'shape',      path: '/shape',   label: 'shape' },
    { id: 'pattern',    path: '/pattern', label: 'pattern', off: 'Tile taps not registering yet' },
    { id: 'tempo',      path: '/tempo',   label: 'tempo',  off: 'Tempo judges live taps; not supported yet' },
    { id: 'cars',       path: '/cars',    label: 'cars',   off: 'Prices are only sent by the server after you guess' },
  ];

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const vis = el => !!el && el.checkVisibility?.() && el.getBoundingClientRect().width > 0;

  // ---- React fiber helpers ----
  const fiberKey = el => Object.keys(el).find(k => k.startsWith('__reactFiber$'));
  const fibers = () => {
    const el = [...document.querySelectorAll('body *')].find(fiberKey);
    if (!el) return [];
    let r = el[fiberKey(el)];
    while (r.return) r = r.return;
    const out = [], q = [r];
    while (q.length && out.length < 40000) {
      const f = q.shift(); out.push(f);
      if (f.child) q.push(f.child);
      if (f.sibling) q.push(f.sibling);
    }
    return out;
  };
  const findProps = test => {
    for (const f of fibers()) {
      const p = f.memoizedProps;
      if (p && typeof p === 'object' && !Array.isArray(p)) { try { if (test(p)) return p; } catch {} }
    }
  };
  const shell = () => findProps(p => typeof p.onInputSubmit === 'function' && 'screen' in p);
  const inputCtl = () => findProps(p => typeof p.onSubmit === 'function' && 'target' in p && 'round' in p);
  const reactKey = el => {
    let f = el[fiberKey(el)];
    for (let i = 0; i < 3 && f; i++) { if (f.key != null) return f.key; f = f.return; }
  };

  // ---- real pointer taps (the site ignores plain .click() on some buttons) ----
  const tap = el => {
    const r = el.getBoundingClientRect();
    const o = { bubbles: true, cancelable: true, clientX: r.x + r.width / 2, clientY: r.y + r.height / 2,
                pointerId: 1, isPrimary: true, pointerType: 'mouse', button: 0, view: window };
    for (const t of ['pointerover', 'pointerenter', 'pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click']) {
      const down = t === 'pointerdown' || t === 'mousedown';
      el.dispatchEvent(new (t.startsWith('pointer') ? PointerEvent : MouseEvent)(t, { ...o, buttons: down ? 1 : 0 }));
    }
  };

  // ---- UI ----
  const ui = document.createElement('div');
  ui.style.cssText = 'position:fixed;top:70px;right:16px;z-index:2147483647;width:210px;background:#111;color:#eee;' +
    'font:13px/1.3 system-ui,sans-serif;border:1px solid #333;border-radius:12px;padding:10px;box-shadow:0 8px 30px #0008';
  ui.innerHTML = `
    <div id="db-h" style="display:flex;justify-content:space-between;align-items:center;cursor:move;margin-bottom:8px">
      <b>DialedBot</b><span id="db-x" style="cursor:pointer;opacity:.6">✕</span></div>
    <div id="db-g" style="display:grid;grid-template-columns:1fr 1fr;gap:6px"></div>
    <label style="display:flex;gap:6px;align-items:center;margin-top:8px;opacity:.85">
      <input id="db-fast" type="checkbox" checked> skip countdown / memorize</label>
    <button id="db-stop" style="margin-top:8px;width:100%;padding:6px;border:0;border-radius:8px;background:#422;color:#fcc;cursor:pointer">Stop</button>
    <div id="db-s" style="margin-top:8px;font-size:12px;opacity:.8;min-height:16px">idle</div>`;
  document.body.appendChild(ui);
  const $ = s => ui.querySelector(s);
  const status = t => { $('#db-s').textContent = t; };

  for (const g of GAMES) {
    const b = document.createElement('button');
    b.textContent = g.label;
    b.title = g.off || `Play ${g.label} perfectly`;
    b.disabled = !!g.off;
    b.style.cssText = `padding:7px 4px;border:0;border-radius:8px;cursor:${g.off ? 'not-allowed' : 'pointer'};` +
      `background:${g.off ? '#222' : '#2a5'};color:${g.off ? '#666' : '#fff'};font-weight:600`;
    b.onclick = () => run(g);
    $('#db-g').appendChild(b);
  }

  // drag
  let drag = null;
  $('#db-h').onpointerdown = e => { drag = [e.clientX - ui.offsetLeft, e.clientY - ui.offsetTop]; };
  addEventListener('pointermove', e => { if (drag) { ui.style.left = e.clientX - drag[0] + 'px'; ui.style.top = e.clientY - drag[1] + 'px'; ui.style.right = 'auto'; } });
  addEventListener('pointerup', () => { drag = null; });

  // ---- engine ----
  let runId = 0;
  const stop = () => { runId++; status('stopped'); };
  $('#db-stop').onclick = stop;
  $('#db-x').onclick = () => window.__dialedBot.destroy();

  async function openGame(g, id) {
    if (location.pathname !== g.path) {
      // client-side route change so this script survives (a normal link click reloads the page)
      if (window.next?.router?.push) window.next.router.push(g.path);
      else { status('open ' + g.path + ' and run again'); return false; }
      for (let i = 0; i < 50 && location.pathname !== g.path; i++) await sleep(100);
    }
    // wait for intro, then press Single player
    for (let i = 0; i < 80 && id === runId; i++) {
      const sh = shell();
      if (sh && sh.screen !== 'intro') return true;               // already in a game
      const btn = [...document.querySelectorAll('button')].filter(vis)
        .find(b => /^single player/i.test(b.getAttribute('aria-label') || ''));
      if (btn) { tap(btn); await sleep(400); if (shell()?.screen !== 'intro') return true; }
      await sleep(100);
    }
    return id === runId && shell()?.screen !== 'intro';
  }

  async function solvePattern(ic) {
    const t = ic.target, n = t.cols * t.rows;
    const byKey = {};
    for (const e of document.querySelectorAll('[class*="__tile"]')) { const k = reactKey(e); if (k != null) byKey[k] = e; }
    const pos = [...Array(n)].map((_, i) => t['p' + i]);
    for (let i = 0; i < n; i++) {
      if (pos[i] === i) continue;
      const j = pos.indexOf(i);
      if (j < 0 || !byKey[i] || !byKey[j]) continue;
      tap(byKey[i]); await sleep(20);
      tap(byKey[j]); await sleep(35);
      [pos[i], pos[j]] = [pos[j], pos[i]];
    }
  }

  async function run(g) {
    const id = ++runId;
    status(`starting ${g.label}…`);
    if (!(await openGame(g, id))) { if (id === runId) status('could not start'); return; }
    let done = '';
    while (id === runId) {
      const sh = shell();
      const fast = $('#db-fast').checked;
      if (sh) {
        const s = sh.screen;
        if (s === 'countdown' && fast && done !== 'cd') { sh.onCountdownComplete?.(); done = 'cd'; }
        else if (s === 'stimulus' && fast && done !== 'mem') { sh.onMemorizeComplete?.(); done = 'mem'; }
        else if (s === 'input') {
          const ic = inputCtl();
          const tag = 'in' + ic?.round;
          if (ic && ic.target != null && done !== tag) {
            status(`${g.label}: round ${ic.round + 1}`);
            if (g.id === 'pattern') await solvePattern(ic);
            else ic.onSubmit(ic.target);
            done = tag;
          }
        }
        else if (s === 'roundResult' && !done.startsWith('next')) { sh.onNextRound(); done = 'next' + Date.now(); }
        else if (s === 'total') {
          const sc = sh.roundScores || [];
          status(`${g.label} done: ${sc.reduce((a, b) => a + b, 0).toFixed(2)} (${sc.join(', ')})`);
          return;
        }
      }
      await sleep(80);
    }
  }

  window.__dialedBot = { destroy() { runId++; ui.remove(); delete window.__dialedBot; } };
})();
