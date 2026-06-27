# CriminalPear's Bookmarklet Collection

Welcome to the **Bookmarklets Collection** by criminalpear! This project is a curated set of fun, useful, and creative bookmarklets that enhance your browsing experience. Hosted on GitHub Pages at [https://criminalpear.github.io/Bookmarklets/](https://criminalpear.github.io/Bookmarklets/), this site lets you explore, view, and grab the code for each bookmarklet directly from your browser.

## What Are Bookmarklets?

Bookmarklets are small JavaScript snippets saved as bookmarks in your browser. When clicked, they run on the current webpage, adding effects, games, utilities, or hacks—without needing to install anything. This collection includes everything from visual effects like "Matrix Rain" to playful pranks like "Virus0" and even mini-games like "Snake" and "Pong".

## Features

- **39 Unique Bookmarklets**: From audio tones (e.g., `15000Hz`) to game mods (e.g., `CookieClicker`, `DialedAutoSolver`) and accessibility tools (e.g., `HighContrast`).
- **Dynamic Code Fetching**: The site pulls the latest bookmarklet code straight from this repository’s `bookmarklets/` folder.
- **Space-Themed Design**: Animated starfield background with drifting stars and shooting stars, glassy cards, and a glowing neon palette — responsive on any screen.
- **Search & Filter**: Live search box plus category chips (Games, Visual, Audio, Utility, Prank).
- **Drag-to-Bookmark**: Drag the ⭐ launcher straight onto your bookmarks bar, or hit **Copy** to paste the code into a new bookmark.

## How to Use

1. **Visit the Site**: Go to [https://criminalpear.github.io/Bookmarklets/](https://criminalpear.github.io/Bookmarklets/).
2. **Find a Bookmarklet**: Search by name/description or filter by category chip.
3. **Add it to Your Browser** — two ways:
   - **Drag**: Make sure your bookmarks bar is visible, then drag the ⭐ **Drag to bar** launcher onto it.
   - **Copy**: Click **Copy code**, create a new bookmark, and paste the code into the URL field.
4. **Run it**: Click the bookmark on any webpage. (Game-specific ones like `DialedAutoSolver` only work on their target site.)

## Bookmarklets List

Here’s a sneak peek at some of the bookmarklets included:

- **15000Hz**: Generates a 15,000 Hz tone—barely audible but weirdly cool near your ear.
- **CookieClicker**: Adds a mod menu with 12 hacks for the Cookie Clicker game.
- **DialedAutoSolver**: Auto-plays the dialed.gg Color game to a perfect 50/50.
- **DialedTrainer**: A read-only overlay that shows the target color and how close your guess is, in real time.
- **Flashlight**: Creates red and blue spotlight effects that follow your mouse.
- **MatrixRain**: Turns your page into a "Matrix"-style digital rain display.
- **Virus0**: A prank that makes your screen look hacked (don’t worry, it’s harmless!).

Check the full list on the site, in [`script.js`](script.js), or in [`bookmarklets`](bookmarklets).

## Project Structure

- **`index.html`**: The main page, with a dropdown, description, and code display.
- **`styles.css`**: Dark-mode styling that scales to fit the webpage.
- **`script.js`**: Defines the bookmarklet list and fetches code from the `bookmarklets/` folder.
- **`bookmarklets/`**: Folder containing individual `.js` files for each bookmarklet (e.g., `15000Hz.js`, `Snake.js`).

## Setup & Deployment

This project is hosted via GitHub Pages. To run or modify it locally:

1. **Clone the Repo**:
   ```bash
   git clone https://github.com/criminalpear/Bookmarklets.git
   cd Bookmarklets
