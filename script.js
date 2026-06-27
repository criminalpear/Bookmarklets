// =====================================================================
//  CriminalPear's Bookmarklet Collection — data + UI + starfield
// =====================================================================

// Bookmarklet data: name, category, description
const bookmarklets = [
    { name: "15000Hz", category: "Audio", description: "Generates a 15,000 Hz audio tone or frequency on the page, which is hard to hear normally but feels/sounds weird when speaker is close to your ear." },
    { name: "3DWebsite", category: "Visual", description: "Adds a 3D effect to the webpage, such as rotating elements or applying a parallax effect, to create a visually engaging experience." },
    { name: "AdBlocker", category: "Utility", description: "Hides or removes advertisements on the page by targeting common ad-related HTML elements, providing a cleaner browsing experience." },
    { name: "Blurry", category: "Visual", description: "Applies a blur effect to the entire webpage." },
    { name: "BubbleText", category: "Visual", description: "Adds a bubble font to all of the text on the webpage." },
    { name: "ClearLocalStorage", category: "Utility", description: "Clears all data stored in the browser’s localStorage for the current website, useful for resetting site-specific settings or data." },
    { name: "Colorful", category: "Visual", description: "Applies a vibrant, multi-colored theme to the webpage." },
    { name: "CookieClicker", category: "Games", description: "Creates a pop-up mod menu for Cookie Clicker which gives you 12 different hack options." },
    { name: "ColorYourPage", category: "Visual", description: "Allows you to apply a custom color scheme to the entire webpage, such as changing the background or text colors, for personalization." },
    { name: "CustomCursor", category: "Visual", description: "Replaces the default mouse cursor with different types of the cursor." },
    { name: "CustomMatrixRain", category: "Visual", description: "Displays a 'Matrix'-style digital rain effect (falling green characters) across the webpage, mimicking the iconic visual from the movie." },
    { name: "DialedAutoSolver", category: "Games", description: "Auto-plays the dialed.gg Color memory game for a perfect 50/50. It reads the round's target colors straight from the page, dials the Hue/Saturation/Brightness sliders to the exact values, and submits each round automatically. Run it on dialed.gg during (or right before) a solo game; click it again to stop." },
    { name: "DialedTrainer", category: "Games", description: "A read-only practice overlay for the dialed.gg Color game. It shows the correct color for the current round, mirrors your live slider values with hint arrows (raise/lower/exact), and flashes a green MATCH banner the instant you nail it — without ever moving the sliders or submitting for you. Click it again to close." },
    { name: "DriftBoss", category: "Games", description: "A Drift Boss Mod Menu/Hack that can increase your sound, amount of coins, and amount of boosts." },
    { name: "EditAnything", category: "Utility", description: "Enables the contenteditable attribute on the webpage, allowing you to edit text directly in the browser for testing or fun." },
    { name: "Flashlight", category: "Visual", description: "Creates two flashlight effects where one is red and one is blue where a circular spotlight follows your mouse, illuminating parts of the page while dimming the rest." },
    { name: "FontFinder", category: "Utility", description: "Identifies and displays the fonts used on the text you last clicked on or highlighted." },
    { name: "Glitch", category: "Visual", description: "Applies a glitch effect to the page, such as flickering elements or distorted visuals, for a cyberpunk or broken-screen aesthetic." },
    { name: "Grayscale", category: "Visual", description: "Converts the entire webpage to grayscale, removing all colors to create a monochromatic look, often used for accessibility or stylistic purposes." },
    { name: "GuessTheNumber", category: "Games", description: "Launches a simple 'guess the number' game in a pop-up, where you try to guess a randomly generated number with hints provided." },
    { name: "HighContrast", category: "Utility", description: "Increases the contrast of the webpage by adjusting colors, making text and elements easier to read, especially for accessibility purposes." },
    { name: "HistoryFlooder", category: "Prank", description: "Floods the browser’s history with entries (e.g., by repeatedly adding the current URL), potentially to obscure previous browsing activity." },
    { name: "InfiniteWordle", category: "Games", description: "A Infinite Wordle hack that shows the word after clicking it (does NOT work in NYT Wordle)." },
    { name: "MatrixRain", category: "Visual", description: "Similar to CustomMatrixRain.js, this displays a 'Matrix'-style digital rain effect with falling characters across the page." },
    { name: "MobileController", category: "Utility", description: "Adds a virtual controller interface optimized for mobile devices. It creates a QR code that a mobile device scans giving that mobile user control of the current game." },
    { name: "MouseTrail", category: "Visual", description: "Creates a visual trail that follows your mouse cursor as you move it across the page, adding a decorative effect." },
    { name: "MultiTool", category: "Utility", description: "Provides a suite of Large utilities in a pop-up." },
    { name: "PianoKeyboard", category: "Audio", description: "Turns your keyboard into a piano, playing musical notes when you press keys, offering an interactive musical experience on the page." },
    { name: "ShootElements", category: "Games", description: "Allows you to 'shoot' or remove elements on the page by aiming the ship at them and clicking space bar." },
    { name: "Snow", category: "Visual", description: "Adds a falling snow effect to the webpage, with snowflakes drifting down the screen, creating a festive or wintery atmosphere." },
    { name: "SpinningCursor", category: "Visual", description: "Makes the mouse cursor spin or rotate as you move it across the page, adding a dynamic visual effect." },
    { name: "Statistics", category: "Utility", description: "Displays statistics about the webpage, such as the number of elements, links, or images, useful for developers analyzing page structure." },
    { name: "TextFinder", category: "Utility", description: "Highlights or extracts specific text on the page based on a search term you provide, making it easier to locate content." },
    { name: "TitleChanger", category: "Utility", description: "Changes the title of the webpage (in the browser tab) to a custom string, either for fun or to test how titles affect SEO or bookmarks." },
    { name: "Unblocker", category: "Utility", description: "Opens the current website in google translate." },
    { name: "Virus0", category: "Prank", description: "Makes your screen look like it's getting hacked while freezing the browser — a harmless prank for a good laugh. Restart the device/tab to recover." },
    { name: "Virus1", category: "Prank", description: "Shows a realistic anti-virus popup claiming the device is infected; closing it spams open tabs which may crash the browser. Great for pranks — obfuscate it to make it harder to spot." },
    { name: "Pong", category: "Games", description: "Launches a simple Pong game on the webpage, allowing you to play the classic game using keyboard controls." },
    { name: "Snake", category: "Games", description: "Starts a Snake game on the page, where you control a snake to collect items and grow, avoiding collisions with walls or yourself." }
];

const RAW_BASE = "https://raw.githubusercontent.com/criminalpear/Bookmarklets/main/bookmarklets/";
const codeCache = {};            // name -> fetched code
let activeCategory = "All";
let searchTerm = "";

// ---------- DOM refs ----------
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const countEl = document.getElementById("count");
const searchEl = document.getElementById("search");
const emptyEl = document.getElementById("empty");
const toastEl = document.getElementById("toast");

// ---------- Build category chips ----------
const categories = ["All", ...Array.from(new Set(bookmarklets.map(b => b.category))).sort()];
categories.forEach(cat => {
    const chip = document.createElement("button");
    chip.className = "chip" + (cat === "All" ? " active" : "");
    chip.textContent = cat;
    chip.dataset.cat = cat;
    chip.addEventListener("click", () => {
        activeCategory = cat;
        document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.cat === cat));
        render();
    });
    filtersEl.appendChild(chip);
});

// ---------- Fetch helper ----------
async function fetchCode(name) {
    if (codeCache[name]) return codeCache[name];
    try {
        const res = await fetch(RAW_BASE + name + ".js");
        if (!res.ok) throw new Error("HTTP " + res.status);
        const code = (await res.text()).trim();
        codeCache[name] = code;
        return code;
    } catch (e) {
        console.error("Could not fetch", name, e);
        return null;
    }
}

// ---------- Toast ----------
let toastTimer;
function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

// ---------- Card factory ----------
function makeCard(b) {
    const card = document.createElement("article");
    card.className = "card";

    const head = document.createElement("div");
    head.className = "card-head";
    const h3 = document.createElement("h3");
    h3.textContent = b.name;
    const badge = document.createElement("span");
    badge.className = "badge " + b.category;
    badge.textContent = b.category;
    head.append(h3, badge);

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = b.description;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    // Draggable launcher (drag straight onto the bookmarks bar)
    const launcher = document.createElement("a");
    launcher.className = "launcher";
    launcher.textContent = "⭐ Drag to bar";
    launcher.setAttribute("aria-disabled", "true");
    launcher.href = "#";
    launcher.title = "Loading code…";

    // Copy button
    const copyBtn = document.createElement("button");
    copyBtn.className = "btn";
    copyBtn.textContent = "Copy code";

    // Show code toggle
    const showBtn = document.createElement("button");
    showBtn.className = "btn ghost";
    showBtn.textContent = "Show code";

    const codeBlock = document.createElement("pre");
    codeBlock.className = "code-block";
    codeBlock.hidden = true;

    actions.append(launcher, copyBtn, showBtn);
    card.append(head, desc, actions, codeBlock);

    // Populate code (sets launcher href so it becomes draggable)
    fetchCode(b.name).then(code => {
        if (!code) {
            launcher.textContent = "⚠ unavailable";
            copyBtn.disabled = true;
            return;
        }
        const href = code.startsWith("javascript:") ? code : "javascript:" + code;
        launcher.href = href;
        launcher.removeAttribute("aria-disabled");
        launcher.title = "Drag me to your bookmarks bar";
        codeBlock.textContent = href;
    });

    // Clicking the launcher shouldn't run/navigate — guide the user to drag it
    launcher.addEventListener("click", e => {
        e.preventDefault();
        toast("Drag this up to your bookmarks bar ↑");
    });

    copyBtn.addEventListener("click", async () => {
        const code = await fetchCode(b.name);
        if (!code) { toast("Couldn't load code"); return; }
        const href = code.startsWith("javascript:") ? code : "javascript:" + code;
        try {
            await navigator.clipboard.writeText(href);
            toast("Copied " + b.name + " ✓");
        } catch {
            // Fallback for older browsers / non-secure contexts
            const ta = document.createElement("textarea");
            ta.value = href; document.body.appendChild(ta); ta.select();
            document.execCommand("copy"); ta.remove();
            toast("Copied " + b.name + " ✓");
        }
    });

    showBtn.addEventListener("click", async () => {
        if (codeBlock.hidden) {
            if (!codeBlock.textContent) {
                codeBlock.textContent = "Loading…";
                const code = await fetchCode(b.name);
                codeBlock.textContent = code
                    ? (code.startsWith("javascript:") ? code : "javascript:" + code)
                    : "Error loading code.";
            }
            codeBlock.hidden = false;
            showBtn.textContent = "Hide code";
        } else {
            codeBlock.hidden = true;
            showBtn.textContent = "Show code";
        }
    });

    return card;
}

// ---------- Render ----------
function render() {
    const term = searchTerm.trim().toLowerCase();
    const list = bookmarklets.filter(b => {
        const catOk = activeCategory === "All" || b.category === activeCategory;
        const searchOk = !term ||
            b.name.toLowerCase().includes(term) ||
            b.description.toLowerCase().includes(term) ||
            b.category.toLowerCase().includes(term);
        return catOk && searchOk;
    });

    grid.innerHTML = "";
    list.forEach(b => grid.appendChild(makeCard(b)));

    emptyEl.hidden = list.length !== 0;
    countEl.textContent = `${list.length} of ${bookmarklets.length} bookmarklets` +
        (activeCategory !== "All" ? ` · ${activeCategory}` : "");
}

searchEl.addEventListener("input", e => { searchTerm = e.target.value; render(); });

render();

// =====================================================================
//  Animated starfield background
// =====================================================================
(function starfield() {
    const canvas = document.getElementById("stars");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w, h, stars, shooting = [];
    const STAR_DENSITY = 0.00018; // stars per pixel

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        const count = Math.max(120, Math.floor(w * h * STAR_DENSITY));
        stars = Array.from({ length: count }, () => spawnStar());
    }

    function spawnStar() {
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            z: Math.random() * 0.8 + 0.2,            // depth → size & speed
            tw: Math.random() * Math.PI * 2,          // twinkle phase
            tws: Math.random() * 0.04 + 0.01          // twinkle speed
        };
    }

    function spawnShooting() {
        const startX = Math.random() * w;
        shooting.push({
            x: startX, y: -20,
            vx: (Math.random() * 2 + 3) * (Math.random() < 0.5 ? 1 : -0.6),
            vy: Math.random() * 3 + 5,
            life: 1
        });
    }

    let last = 0;
    function frame(t) {
        const dt = Math.min(2, (t - last) / 16.67 || 1);
        last = t;
        ctx.clearRect(0, 0, w, h);

        // drifting + twinkling stars
        for (const s of stars) {
            s.y += s.z * 0.25 * dt;                  // slow parallax drift downward
            if (s.y > h + 2) { s.y = -2; s.x = Math.random() * w; }
            s.tw += s.tws * dt;
            const alpha = 0.45 + Math.sin(s.tw) * 0.4;
            const size = s.z * 1.6;
            ctx.globalAlpha = Math.max(0.05, alpha);
            ctx.fillStyle = s.z > 0.75 ? "#bcd2ff" : "#ffffff";
            ctx.beginPath();
            ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;

        // shooting stars
        for (let i = shooting.length - 1; i >= 0; i--) {
            const m = shooting[i];
            m.x += m.vx * dt; m.y += m.vy * dt; m.life -= 0.012 * dt;
            const len = 14;
            const grad = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * len, m.y - m.vy * len);
            grad.addColorStop(0, `rgba(190,220,255,${Math.max(0, m.life)})`);
            grad.addColorStop(1, "rgba(190,220,255,0)");
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(m.x, m.y);
            ctx.lineTo(m.x - m.vx * len, m.y - m.vy * len);
            ctx.stroke();
            if (m.life <= 0 || m.y > h + 40) shooting.splice(i, 1);
        }
        if (!reduce && Math.random() < 0.004 && shooting.length < 3) spawnShooting();

        requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduce) {
        // static render once
        last = 0; frame(0);
    } else {
        requestAnimationFrame(frame);
    }
})();
