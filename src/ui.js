import { createEl } from "./dom.js";

export function createCard(card) {
  const back = createEl("div", { className: "card__side card__back" });
  const img = createEl("img", {
    className: "card__image",
    attrs: { src: card.src, alt: card.alt },
  });
  const front = createEl("div", { className: "card__side card__front" }, [img]);

  return createEl(
    "button",
    {
      className: "card",
      attrs: { type: "button", "data-uid": card.uid },
    },
    [back, front],
  );
}

export function createUI() {
  const newGameBtn = createEl("button", {
    className: "btn",
    text: "New game",
    attrs: { type: "button" },
  });
  const leaderboardBtn = createEl("button", {
    className: "btn",
    text: "Leaderboard",
    attrs: { type: "button" },
  });
  const header = createEl("header", { className: "header" }, [
    newGameBtn,
    leaderboardBtn,
  ]);

  const movesValue = createEl("span", { text: "0" });
  const pairsValue = createEl("span", { text: "0" });
  const stats = createEl("div", { className: "stats" }, [
    createEl("p", { text: "Moves: " }, [movesValue]),
    createEl("p", { text: "Pairs: " }, [
      pairsValue,
      document.createTextNode(" of 8"),
    ]),
  ]);

  const board = createEl("main", { className: "board" });

  const app = createEl("div", { className: "app" }, [header, stats, board]);

  return { app, board, newGameBtn, leaderboardBtn, movesValue, pairsValue };
}

export function renderBoard(board, deck) {
  board.replaceChildren(...deck.map(createCard));
}
