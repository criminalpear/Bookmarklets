// Bookmarklet data with corrected names and descriptions
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
        code: "javascript:void(0);" // Replace with actual code from Colorful.js
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
        code: "javascript:void(0);" // Replace with actual code from Flashlight.js
    },
    {
        name: "FontFinder",
        description: "Identifies and displays the fonts used on the webpage, useful for web developers or designers inspecting typography.",
        code: "javascript:void(0);" // Replace with actual code from FontFinder.js
    },
    {
        name: "Glitch",
        description: "Applies a glitch effect to the page, such as flickering elements or distorted visuals, for a cyberpunk or broken-screen aesthetic.",
        code: "javascript:void(0);" // Replace with actual code from Glitch.js
    },
    {
        name: "Grayscale",
        description: "Converts the entire webpage to grayscale, removing all colors to create a monochromatic look, often used for accessibility or stylistic purposes.",
        code: "javascript:void(0);" // Replace with actual code from Grayscale.js
    },
    {
        name: "GuessTheNumber",
        description: "Launches a simple 'guess the number' game in a pop-up, where you try to guess a randomly generated number with hints provided.",
        code: "javascript:void(0);" // Replace with actual code from GuessTheNumber.js
    },
    {
        name: "HighContrast",
        description: "Increases the contrast of the webpage by adjusting colors, making text and elements easier to read, especially for accessibility purposes.",
        code: "javascript:void(0);" // Replace with actual code from HighContrast.js
    },
    {
        name: "HistoryFlooder",
        description: "Floods the browser’s history with entries (e.g., by repeatedly adding the current URL), potentially to obscure previous browsing activity.",
        code: "javascript:void(0);" // Replace with actual code from HistoryFlooder.js
    },
    {
        name: "InfiniteWordle",
        description: "Likely an infinite version of the Wordle game, where you can keep playing endlessly with new words, adding a challenging twist to the popular word puzzle.",
        code: "javascript:void(0);" // Replace with actual code from InfiniteWordle.js
    },
    {
        name: "MatrixRain",
        description: "Similar to CustomMatrixRain.js, this displays a 'Matrix'-style digital rain effect with falling characters across the page.",
        code: "javascript:void(0);" // Replace with actual code from MatrixRain.js
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
