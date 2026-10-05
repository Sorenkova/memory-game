import { createEl } from "./dom.js";

function createButton(text, onClick) {
  const button = createEl("button", {
    className: "btn",
    text,
    attrs: { type: "button" },
  });
  button.addEventListener("click", onClick);
  return button;
}

export function createWinContent(moves, { onNewGame, onClose }) {
  return createEl("div", { className: "modal__content" }, [
    createEl("h2", { text: "You win!" }),
    createEl("p", { text: `Total moves: ${moves}` }),
    createEl("div", { className: "modal__actions" }, [
      createButton("New game", onNewGame),
      createButton("Close", onClose),
    ]),
  ]);
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}.${month}.${date.getFullYear()}`;
}

function createRow(cells, tag = "td") {
  return createEl(
    "tr",
    {},
    cells.map((text) => createEl(tag, { text: String(text) })),
  );
}

export function createLeaderboardContent(results, { onClose }) {
  const children = [createEl("h2", { text: "Leaderboard" })];

  if (results.length === 0) {
    children.push(createEl("p", { text: "No results yet" }));
  } else {
    const thead = createEl("thead", {}, [
      createRow(["Place", "Moves", "Date"], "th"),
    ]);
    const tbody = createEl(
      "tbody",
      {},
      results.map((result, index) =>
        createRow([index + 1, result.moves, formatDate(result.timestamp)]),
      ),
    );
    children.push(
      createEl("table", { className: "leaderboard" }, [thead, tbody]),
    );
  }

  children.push(
    createEl("div", { className: "modal__actions" }, [
      createButton("Close", onClose),
    ]),
  );

  return createEl("div", { className: "modal__content" }, children);
}
