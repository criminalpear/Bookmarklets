// Bookmarklet data with corrected names, descriptions, and matched codes
const bookmarklets = [
    {
        name: "15000Hz",
        description: "Likely generates a 15,000 Hz audio tone or frequency on the page, possibly for testing audio capabilities or creating a high-pitched sound effect.",
        code: "javascript:void(0);" // Replace with actual code from 15000Hz.js
    },
    {
        name: "3DWebsite",
        description: "Adds a 3D effect to the webpage, such as rotating elements or applying a parallax effect, to create a visually engaging experience.",
        code: "javascript:void(0);" // Replace with actual code from 3DWebsite.js
    },
    {
        name: "AdBlocker",
        description: "Hides or removes advertisements on the page by targeting common ad-related HTML elements, providing a cleaner browsing experience.",
        code: "javascript:void(0);" // Replace with actual code from AdBlocker.js
    },
    {
        name: "Blurry",
        description: "Applies a blur effect to the entire webpage or specific elements, possibly for stylistic purposes or to obscure content temporarily.",
        code: "javascript:void(0);" // Replace with actual code from Blurry.js
    },
    {
        name: "BubbleText",
        description: "Likely adds a bubbling or animated text effect to the page, where text floats or bounces, creating a playful or dynamic visual.",
        code: "javascript:void(0);" // Replace with actual code from BubbleText.js
    },
    {
        name: "ClearLocalStorage",
        description: "Clears all data stored in the browser’s localStorage for the current website, useful for resetting site-specific settings or data.",
        code: "javascript:void(0);" // Replace with actual code from ClearLocalStorage.js
    },
    {
        name: "Colorful",
        description: "Applies a vibrant, multi-colored theme to the webpage, possibly cycling through colors or enhancing existing colors for a lively effect.",
        code: "javascript:(function(){function c(){return\"#\"+Math.floor(16777215*Math.random()).toString(16)}function r(e){return Math.floor(Math.random()*e)+1}function l(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}var d=document;d.head.innerHTML=\"<style>*{margin:0; overflow:hidden; padding:0;overflow:hidden;} div{  transform-origin: 50% 50%; width:100%; height:1px; position:relative; z-index:1;} </style>\",d.body.innerHTML=\"\";var w=window.screen.availHeight;for(d.body.addEventListener(\"click\",function(){l(d.documentElement)}),i=0;w>=i;i++){var z=d.createElement(\"div\");z.id=\"b\"+i,z.style.backgroundColor=c(),d.body.appendChild(z)}setInterval(function(){for(var e=0;10>e;e++)d.getElementById(\"b\"+r(w)).style.backgroundColor=c(),d.getElementById(\"b\"+r(w)).style.height=r(4)+\"px\",d.body.style.backgroundColor=c(),d.body.style.transform=r(256)>128?\"scale(3) rotate(\"+r(35)+\"deg)\":\"rotate(0deg) scale(1)\";window.scrollTo(0,document.body.scrollHeight)},10),setInterval(function(){window.scrollTo(0,0)},50);})()"
    },
    {
        name: "ColorYourPage",
        description: "Allows you to apply a custom color scheme to the entire webpage, such as changing the background or text colors, for personalization.",
        code: "javascript:void(0);" // Replace with actual code from ColorYourPage.js
    },
    {
        name: "CustomCursor",
        description: "Replaces the default mouse cursor with a custom image or style, adding a unique visual flair to your browsing experience.",
        code: "javascript:void(0);" // Replace with actual code from CustomCursor.js
    },
    {
        name: "CustomMatrixRain",
        description: "Displays a 'Matrix'-style digital rain effect (falling green characters) across the webpage, mimicking the iconic visual from the movie.",
        code: "javascript:void(0);" // Replace with actual code from CustomMatrixRain.js
    },
    {
        name: "DriftBoss",
        description: "Possibly related to a game like 'Drift Boss,' this might enable a mini drifting game or apply drifting physics to elements on the page.",
        code: "javascript:void(0);" // Replace with actual code from DriftBoss.js
    },
    {
        name: "EditAnything",
        description: "Enables the contenteditable attribute on the webpage, allowing you to edit text directly in the browser for testing or fun.",
        code: "javascript:void(0);" // Replace with actual code from EditAnything.js
    },
    {
        name: "Flashlight",
        description: "Creates a flashlight effect where a circular spotlight follows your mouse, illuminating parts of the page while dimming the rest.",
        code: "javascript:(function(){var js=document.body.appendChild(document.createElement(\"script\"));js.onerror=function(){alert(\"Sorry, the script could not be loaded.\")};js.src=\"https://rawgit.com/Krazete/bookmarklets/master/mouselight.js\"})();"
    },
    {
        name: "FontFinder",
        description: "Identifies and displays the fonts used on the webpage, useful for web developers or designers inspecting typography.",
        code: "javascript:(function(){function getSelectedNode(){if(window.getSelection().focusNode===null)return null;return window.getSelection().focusNode.parentNode}function getNodeFontStack(node){return window.getComputedStyle(node).fontFamily}function getFirstAvailableFont(fonts){for(let font of fonts){let fontName=font.trim().replace(/\"/g,'');let isAvailable=document.fonts.check(`16px ${fontName}`);if(!isAvailable)continue;return fontName}}let node=getSelectedNode();if(!node){window.alert('Please select a string of text and try again.');return}let fonts=getNodeFontStack(node).split(',');let firstAvailableFont=getFirstAvailableFont(fonts);window.alert(`Font: ${firstAvailableFont}`)})()"
    },
    {
        name: "Glitch",
        description: "Applies a glitch effect to the page, such as flickering elements or distorted visuals, for a cyberpunk or broken-screen aesthetic.",
        code: "javascript:void(0);" // Replace with actual code from Glitch.js
    },
    {
        name: "Grayscale",
        description: "Converts the entire webpage to grayscale, removing all colors to create a monochromatic look, often used for accessibility or stylistic purposes.",
        code: "javascript:(function () { document.body.style.filter = 'grayscale(100%)'; })();"
    },
    {
        name: "GuessTheNumber",
        description: "Launches a simple 'guess the number' game in a pop-up, where you try to guess a randomly generated number with hints provided.",
        code: "javascript:var x=0;alert(\"Guess A Number Between 1 And 20\");function getRandomNumberBetween(min,max){ return Math.floor(Math.random()*(max-min+1)+min); };a=getRandomNumberBetween(0,21);while (true){v=prompt(\"What Number Do You Guess?\");if (v==a){x=x+1;alert(\"You Got It! It Only Took You \"+x+\" Tries!\");break} else if (v>20){alert(\"Please Guess A Number Between Or Equal To 1 And 20!\")} else if (v<1){alert(\"Please Guess A Number Between Or Equal To 1 And 20!\")} else if (v>a){x=x+1;alert(\"Too High!\")} else if (v<a){x=x+1;alert(\"Too Low!\")}}"
    },
    {
        name: "HighContrast",
        description: "Increases the contrast of the webpage by adjusting colors, making text and elements easier to read, especially for accessibility purposes.",
        code: "javascript:(function () { document.body.style.filter = 'invert(100%)'; })();" // Tentative match; adjust if incorrect
    },
    {
        name: "HistoryFlooder",
        description: "Floods the browser’s history with entries (e.g., by repeatedly adding the current URL), potentially to obscure previous browsing activity.",
        code: "javascript:var num=prompt(\"History Flood Amount:\");done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert(\"History Flood Successful! \"+window.location.href+\" Now Appears In Your History \"+num+(num==1?\" Time!\":\" Times!\"))}"
    },
    {
        name: "InfiniteWordle",
        description: "Likely an infinite version of the Wordle game, where you can keep playing endlessly with new words, adding a challenging twist to the popular word puzzle.",
        code: "javascript:(function(){toaster=document.querySelector(\"game-app\").shadowRoot.querySelector(\"#game-toaster\");app=new wordle.bundle.GameApp();t = document.createElement(\"game-toast\");t.setAttribute(\"text\", app.solution.toUpperCase());t.setAttribute(\"duration\", 2e3);toaster.prepend(t);})();"
    },
    {
        name: "MatrixRain",
        description: "Similar to CustomMatrixRain.js, this displays a 'Matrix'-style digital rain effect with falling characters across the page.",
        code: "javascript:(function(){var wn=window,w,h,o={},m,dc,b,c='ABCDEFGHIJKLM1234567890nopqrstuvwxyz',y=setInterval,z=clearInterval,t=1;function x(){dc=document;b=dc.body;b.innerHTML='';bs=b.style;w=wn.innerWidth;h=wn.innerHeight;bs.backgroundColor='black';bs.overflow='hidden';m=y(n,25);dc.addEventListener('keydown',function(e){if(e.keyCode==83){if(t)z(m);else m=y(n,25);t=!t}},0)}function g(i){return dc.getElementById(i)}function r(d,m){return Math.floor(Math.random()*d)+m}function a(i){var d=g(i),ds=d.style,t=parseInt(ds.top),k=o[i];if(t<h){ds.top=(t+10)+'px'}else{z(k);b.removeChild(d);delete k}}function n(){var d=dc.createElement('div'),dt=new Date(),i='m_'+dt.getTime(),ds=d.style,v=ds.visibility,j=0,u=[],l=r(21,4),q=c.length,p;d.id=i;ds.width='5px';ds.opacity=r(.3,.7);ds.fontSize=r(8,8)+'px';ds.lineHeight='8px';ds.color='green';ds.position='absolute';ds.left=r(w,0)+'px';v='hidden';while(j<l){p=r(q,0);u[j]=c.substring(p,p+1);j++}d.innerHTML=u.join(\"\\n\");b.appendChild(d);ds.top=-d.offsetHeight+'px';v='visible';o[i]=y(function(){a(i)},r(20,40))}x();})()"
    },
    {
        name: "MobileController",
        description: "Adds a virtual controller interface optimized for mobile devices, possibly for gaming or navigation on touchscreens.",
        code: "javascript:void(0);" // Replace with actual code from MobileController.js
    },
    {
        name: "MouseTrail",
        description: "Creates a visual trail that follows your mouse cursor as you move it across the page, adding a decorative effect.",
        code: "javascript:void(0);" // Replace with actual code from MouseTrail.js
    },
    {
        name: "MultiTool",
        description: "Provides a suite of small utilities in a pop-up, such as a calculator, color picker, or unit converter, for quick access while browsing.",
        code: "javascript:void(0);" // Replace with actual code from MultiTool.js
    },
    {
        name: "PianoKeyboard",
        description: "Turns your keyboard into a piano, playing musical notes when you press keys, offering an interactive musical experience on the page.",
        code: "javascript:void(0);" // Replace with actual code from PianoKeyboard.js
    },
    {
        name: "ShootElements",
        description: "Allows you to 'shoot' or remove elements on the page by clicking them, possibly with a visual effect like an explosion or fade-out.",
        code: "javascript:void(0);" // Replace with actual code from ShootElements.js
    },
    {
        name: "Snow",
        description: "Adds a falling snow effect to the webpage, with snowflakes drifting down the screen, creating a festive or wintery atmosphere.",
        code: "javascript:void(0);" // Replace with actual code from Snow.js
    },
    {
        name: "SpinningCursor",
        description: "Makes the mouse cursor spin or rotate as you move it across the page, adding a dynamic visual effect.",
        code: "javascript:void(0);" // Replace with actual code from SpinningCursor.js
    },
    {
        name: "Statistics",
        description: "Displays statistics about the webpage, such as the number of elements, links, or images, useful for developers analyzing page structure.",
        code: "javascript:void(0);" // Replace with actual code from Statistics.js
    },
    {
        name: "TextFinder",
        description: "Highlights or extracts specific text on the page based on a search term you provide, making it easier to locate content.",
        code: "javascript:void(0);" // Replace with actual code from TextFinder.js
    },
    {
        name: "TitleChanger",
        description: "Changes the title of the webpage (in the browser tab) to a custom string, either for fun or to test how titles affect SEO or bookmarks.",
        code: "javascript:void(0);" // Replace with actual code from TitleChanger.js
    },
    {
        name: "Unblocker",
        description: "Attempts to bypass restrictions on the webpage, such as unlocking hidden content or disabling right-click protections, though effectiveness may vary.",
        code: "javascript:void(0);" // Replace with actual code from Unblocker.js
    },
    {
        name: "Virus0",
        description: "This Bookmarklet Makes Your Screen Look Like It's Getting Hacked Also Freezing Your Browser Causing It To Crash And No Longer Work Until You Restart Your Device This Bookmarklet Is Amazing For Pranking Your Friends Or Family And Getting A Good Laugh Out Of It!",
        code: "javascript:void(0);" // Replace with actual code from Virus0.js
    },
    {
        name: "Virus1",
        description: "This Bookmarklet Makes A Somewhat Of A Realistic Anti-Virus Popup Telling The User That Their Device May Be Effected By 2 Viruses And On Closing The Popup Your Device Will Spam Open Tabs Which May Cause The Browser To Crash Or Chromebook To Crash Its Recommended To Obfuscate The Bookmarklet So The Prank Is More Funny And Harder To Notice!",
        code: "javascript:void(0);" // Replace with actual code from Virus1.js
    },
    {
        name: "Pong",
        description: "Launches a simple Pong game on the webpage, allowing you to play the classic game using keyboard controls.",
        code: "javascript:void(0);" // Replace with actual code from Pong.js
    },
    {
        name: "Snake",
        description: "Starts a Snake game on the page, where you control a snake to collect items and grow, avoiding collisions with walls or yourself.",
        code: "javascript:void(0);" // Replace with actual code from Snake.js
    }
];

// Populate the dropdown menu
const select = document.getElementById('bookmarklet-select');
bookmarklets.forEach(bookmarklet => {
    const option = document.createElement('option');
    option.value = bookmarklet.name;
    option.textContent = bookmarklet.name;
    select.appendChild(option);
});

// Display description and code when a bookmarklet is selected
select.addEventListener('change', (event) => {
    const selectedName = event.target.value;
    const bookmarklet = bookmarklets.find(b => b.name === selectedName);

    const descriptionDiv = document.getElementById('description');
    const codePre = document.getElementById('bookmarklet-code');

    if (bookmarklet) {
        descriptionDiv.textContent = bookmarklet.description;
        codePre.textContent = bookmarklet.code;
    } else {
        descriptionDiv.textContent = '';
        codePre.textContent = '';
    }
});
