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
