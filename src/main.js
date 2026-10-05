import { createEl } from "./dom.js";

const app = createEl("div", { className: "app" }, [
  createEl("h1", { text: "Memory Game" }),
]);

document.body.append(app);

import { createDeck } from "./cards.js";
import { createUI, renderBoard } from "./ui.js";

const ui = createUI();
document.body.append(ui.app);

renderBoard(ui.board, createDeck());
