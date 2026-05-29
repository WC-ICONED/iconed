# ICONED

A Wordle-style **daily World Cup football-player guessing game**, live at
[iconed.wtf](https://iconed.wtf). Players get 5 guesses to identify a footballer
from a set of clues that progressively reveal on each miss.

It's a static **HTML / CSS / JS** site with **no build step** — every change goes
directly into the source files.

## Game modes

- **Main game** (`/`) — daily player drawn from World Cups 1930–2022, with an
  archive of past days, a sticker-album collection view, and a stats modal.
- **NATIONS** (`/nations/`) — per-nation WC2026 squad game. Each nation lives in
  `nations/{slug}/` (`index.html` + `data.js`); the hub at `nations/index.html`
  lists all nations grouped by confederation and shows a **My Album** of the
  players you've correctly guessed across every nation.
- **Clubs** (`/clubs/`) — hidden per-club subsites (e.g. Arsenal, Chelsea).

## Project layout

| Path | Purpose |
| --- | --- |
| `index.html` | Main game page |
| `app.js` | Core game logic (puzzle picking, guessing, clue reveals, archive) |
| `data.js` | Player puzzle data (`window.PUZZLES`) |
| `stats.js` | localStorage-based stats tracking |
| `styles.css` | All styling (sticker/album aesthetic) |
| `nations/` | NATIONS game — shared `app.js`/`styles.css`/`stats.js` + per-nation folders |
| `stickers/` | Custom sticker images, named by player ID |

## Local development

```bash
npx serve -p 3456 .
```

Then open the served URL (e.g. <http://localhost:3456>) in a browser.

## Deployment

The site is hosted on **Vercel**, connected to this GitHub repo. There is **no
build step** — Vercel serves the repo root as static files (no `vercel.json`, no
CI workflow). The custom domains `iconed.wtf` and `www.iconed.wtf` are configured
in the Vercel dashboard.

To ship a change:

```bash
git push origin main
```

Vercel rebuilds automatically within ~1–2 minutes. Hard-refresh
(<kbd>Cmd/Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>) to bypass the browser cache
when verifying `index.html` / `app.js` updates on the live site.
