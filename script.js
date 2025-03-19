// Bookmarklet data with names and descriptions
const bookmarklets = [
    { name: "15000Hz", description: "Generates a 15,000 Hz audio tone or frequency on the page, which is hard to hear normally but feels/sounds weird when speaker is close to your ear." },
    { name: "3DWebsite", description: "Adds a 3D effect to the webpage, such as rotating elements or applying a parallax effect, to create a visually engaging experience." },
    { name: "AdBlocker", description: "Hides or removes advertisements on the page by targeting common ad-related HTML elements, providing a cleaner browsing experience." },
    { name: "Blurry", description: "Applies a blur effect to the entire webpage." },
    { name: "BubbleText", description: "Adds a bubble font to all of the text on the webpage." },
    { name: "ClearLocalStorage", description: "Clears all data stored in the browser’s localStorage for the current website, useful for resetting site-specific settings or data." },
    { name: "Colorful", description: "Applies a vibrant, multi-colored theme to the webpage." },
    { name: "CookieClicker", description: "Creates a pop-up mod menu for Cookie Clicker which gives you 12 different hack options."},
    { name: "ColorYourPage", description: "Allows you to apply a custom color scheme to the entire webpage, such as changing the background or text colors, for personalization." },
    { name: "CustomCursor", description: "Replaces the default mouse cursor with different types of the cursor." },
    { name: "CustomMatrixRain", description: "Displays a 'Matrix'-style digital rain effect (falling green characters) across the webpage, mimicking the iconic visual from the movie." },
    { name: "DriftBoss", description: "A Drift Boss Mod Menu/Hack that can increase your sound, amount of coins, and amount of boosts." },
    { name: "EditAnything", description: "Enables the contenteditable attribute on the webpage, allowing you to edit text directly in the browser for testing or fun." },
    { name: "Flashlight", description: "Creates two flashlight effects where one is red and one is blue where a circular spotlight follows your mouse, illuminating parts of the page while dimming the rest." },
    { name: "FontFinder", description: "Identifies and displays the fonts used on the text you last clicked on or higlighted." },
    { name: "Glitch", description: "Applies a glitch effect to the page, such as flickering elements or distorted visuals, for a cyberpunk or broken-screen aesthetic." },
    { name: "Grayscale", description: "Converts the entire webpage to grayscale, removing all colors to create a monochromatic look, often used for accessibility or stylistic purposes." },
    { name: "GuessTheNumber", description: "Launches a simple 'guess the number' game in a pop-up, where you try to guess a randomly generated number with hints provided." },
    { name: "HighContrast", description: "Increases the contrast of the webpage by adjusting colors, making text and elements easier to read, especially for accessibility purposes." },
    { name: "HistoryFlooder", description: "Floods the browser’s history with entries (e.g., by repeatedly adding the current URL), potentially to obscure previous browsing activity." },
    { name: "InfiniteWordle", description: "A Infinite Wordle hack that shows the word after clicking it (does NOT work in NYT Wordle)." },
    { name: "MatrixRain", description: "Similar to CustomMatrixRain.js, this displays a 'Matrix'-style digital rain effect with falling characters across the page." },
    { name: "MobileController", description: "Adds a virtual controller interface optimized for mobile devices. It creates a QR code that a mobile device scans giving that mobile user controll of the current game." },
    { name: "MouseTrail", description: "Creates a visual trail that follows your mouse cursor as you move it across the page, adding a decorative effect." },
    { name: "MultiTool", description: "Provides a suite of Large utilities in a pop-up." },
    { name: "PianoKeyboard", description: "Turns your keyboard into a piano, playing musical notes when you press keys, offering an interactive musical experience on the page." },
    { name: "ShootElements", description: "Allows you to 'shoot' or remove elements on the page by aiming the ship at them and clicking space bar." },
    { name: "Snow", description: "Adds a falling snow effect to the webpage, with snowflakes drifting down the screen, creating a festive or wintery atmosphere." },
    { name: "SpinningCursor", description: "Makes the mouse cursor spin or rotate as you move it across the page, adding a dynamic visual effect." },
    { name: "Statistics", description: "Displays statistics about the webpage, such as the number of elements, links, or images, useful for developers analyzing page structure." },
    { name: "TextFinder", description: "Highlights or extracts specific text on the page based on a search term you provide, making it easier to locate content." },
    { name: "TitleChanger", description: "Changes the title of the webpage (in the browser tab) to a custom string, either for fun or to test how titles affect SEO or bookmarks." },
    { name: "Unblocker", description: "Opens the current website in google translate." },
    { name: "Virus0", description: "This Bookmarklet Makes Your Screen Look Like It's Getting Hacked Also Freezing Your Browser Causing It To Crash And No Longer Work Until You Restart Your Device This Bookmarklet Is Amazing For Pranking Your Friends Or Family And Getting A Good Laugh Out Of It!" },
    { name: "Virus1", description: "This Bookmarklet Makes A Somewhat Of A Realistic Anti-Virus Popup Telling The User That Their Device May Be Effected By 2 Viruses And On Closing The Popup Your Device Will Spam Open Tabs Which May Cause The Browser To Crash Or Chromebook To Crash Its Recommended To Obfuscate The Bookmarklet So The Prank Is More Funny And Harder To Notice!" },
    { name: "Pong", description: "Launches a simple Pong game on the webpage, allowing you to play the classic game using keyboard controls." },
    { name: "Snake", description: "Starts a Snake game on the page, where you control a snake to collect items and grow, avoiding collisions with walls or yourself." }
];

// Populate the dropdown menu
const select = document.getElementById('bookmarklet-select');
bookmarklets.forEach(bookmarklet => {
    const option = document.createElement('option');
    option.value = bookmarklet.name;
    option.textContent = bookmarklet.name;
    select.appendChild(option);
});

// Function to fetch bookmarklet code from GitHub
async function fetchBookmarkletCode(bookmarkletName) {
    try {
        const response = await fetch(`https://raw.githubusercontent.com/criminalpear/Bookmarklets/main/bookmarklets/${bookmarkletName}.js`);
        if (!response.ok) throw new Error(`Failed to fetch ${bookmarkletName}.js`);
        const code = await response.text();
        return code.trim();
    } catch (error) {
        console.error(error);
        return "Error: Could not fetch bookmarklet code. Please check the repository or try again later.";
    }
}

// Display description and code when a bookmarklet is selected
select.addEventListener('change', async (event) => {
    const selectedName = event.target.value;
    const bookmarklet = bookmarklets.find(b => b.name === selectedName);

    const descriptionDiv = document.getElementById('description');
    const codePre = document.getElementById('bookmarklet-code');

    if (bookmarklet) {
        descriptionDiv.textContent = bookmarklet.description;
        codePre.textContent = "Loading code..."; // Temporary message while fetching
        const code = await fetchBookmarkletCode(bookmarklet.name);
        codePre.textContent = code;
    } else {
        descriptionDiv.textContent = '';
        codePre.textContent = '';
    }
});
