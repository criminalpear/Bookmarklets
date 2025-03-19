# CriminalPear's Bookmarklet Collection

Welcome to the **Bookmarklets Collection** by criminalpear! This project is a curated set of fun, useful, and creative bookmarklets that enhance your browsing experience. Hosted on GitHub Pages at [https://criminalpear.github.io/Bookmarklets/](https://criminalpear.github.io/Bookmarklets/), this site lets you explore, view, and grab the code for each bookmarklet directly from your browser.

## What Are Bookmarklets?

Bookmarklets are small JavaScript snippets saved as bookmarks in your browser. When clicked, they run on the current webpage, adding effects, games, utilities, or hacks—without needing to install anything. This collection includes everything from visual effects like "Matrix Rain" to playful pranks like "Virus0" and even mini-games like "Snake" and "Pong".

## Features

- **37 Unique Bookmarklets**: From audio tones (e.g., `15000Hz`) to game mods (e.g., `CookieClicker`) and accessibility tools (e.g., `HighContrast`).
- **Dynamic Code Fetching**: The site pulls the latest bookmarklet code straight from this repository’s `bookmarklets/` folder.
- **Dark Mode Design**: Eye-friendly, responsive layout that scales to fit your screen.
- **Easy to Use**: Select a bookmarklet from the dropdown, read its description, and copy the code to create your own bookmark.

## How to Use

1. **Visit the Site**: Go to [https://criminalpear.github.io/Bookmarklets/](https://criminalpear.github.io/Bookmarklets/).
2. **Choose a Bookmarklet**: Use the dropdown menu to pick a bookmarklet.
3. **Read the Description**: See what it does in the description box.
4. **Get the Code**: Copy the JavaScript code from the "Bookmarklet Code" section.
5. **Add to Your Browser**:
   - Create a new bookmark in your browser.
   - Paste the code into the URL field (prepend with `javascript:` if it’s not already there).
   - Save it with a name (e.g., "MatrixRain").
   - Click the bookmark on any webpage to run it!

## Bookmarklets List

Here’s a sneak peek at some of the bookmarklets included:

- **15000Hz**: Generates a 15,000 Hz tone—barely audible but weirdly cool near your ear.
- **CookieClicker**: Adds a mod menu with 12 hacks for the Cookie Clicker game.
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
