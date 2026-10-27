# AV Hub

A one-page link hub for AV supplier sites, deal registration, room designer tools and training portals. It's a plain static site that runs on GitHub Pages.

## Files
- `index.html`: the page layout and styling (no need to touch it)
- `links.js`: **all of the links**. Edit this file to add, remove or rename links.
- `icons/`: your own logo images for tiles whose sites don't supply a good icon.

## Put it on GitHub Pages (one-time setup)
1. On github.com, click **New repository**, name it `av-hub` and set it to **Public**.
2. On the new repo page, click **uploading an existing file**, then drag in `index.html`, `links.js`, `README.md` and the `icons` folder. Commit.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main**, and folder to **/ (root)**. Save.
4. After a minute the site will be live at `https://<your-username>.github.io/av-hub/`.

## Updating links later
Open `links.js` on GitHub, click the pencil icon, edit and commit. The site updates within a minute.

Each link looks like this:
```js
{ name: "Synnex Australia", url: "https://www.synnex.com.au" },
```
Optional extras:
- `color: "#0b3f8f"` sets the tile colour shown before the icon loads.
- `icon: "icons/name.png"` (or a full web link) uses a specific logo image instead of the site's icon.
- `fit: "full"` makes a square logo fill the whole tile.
