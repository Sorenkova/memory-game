# Memory Game

A card-matching game built with vanilla HTML, CSS and JavaScript.
Flip two cards at a time, remember their positions and find all 8 pairs in as few moves as possible.

**Demo:** https://sorenkova.github.io/memory-game/

## Features

- 16 shuffled cards (8 pairs), Fisher-Yates shuffle
- Move and pair counters
- Mismatched cards flip back after 1 second; other cards are locked meanwhile
- New game at any moment, including while a mismatched pair is open
- Win modal with the total number of moves
- Leaderboard (top 10 results) stored in localStorage
- Reusable modal component: close with a button, a click on the backdrop or Escape
- All markup is created with `document.createElement`

## Run locally

1. Clone the repository and switch to the branch:

```bash
   git clone https://github.com/Sorenkova/memory-game
   cd memory-game
   git checkout memory-game
```

2. ES modules don't work from `file://`, so start any static server, for example:
   - VS Code: install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**, or
   - `npx serve`
3. Open the address shown in the terminal (e.g. `http://127.0.0.1:5500`).

## Project structure

- `index.html`: empty body with a single script tag
- `src/main.js`: entry point
- `src/game.js`: game state and logic
- `src/ui.js`: header, counters, board and card rendering
- `src/modal.js`: reusable modal shell
- `src/modals.js`: content of the win and leaderboard modals
- `src/storage.js`: leaderboard storage
- `src/cards.js`, `src/shuffle.js`: card data and shuffling
- `src/dom.js`: `createEl` helper

## Credits

Card images: https://www.flaticon.com/packs/the-lost-world-2
