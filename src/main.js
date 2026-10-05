import { createUI } from "./ui.js";
import { createGame } from "./game.js";

const ui = createUI();
document.body.append(ui.app);

const game = createGame(ui, {
  onWin: (moves) => console.log("win", moves),
});

ui.newGameBtn.addEventListener("click", game.start);
game.start();

import { createEl } from "./dom.js";
import { openModal, closeModal } from "./modal.js";

ui.leaderboardBtn.addEventListener("click", () => {
  const closeBtn = createEl("button", {
    className: "btn",
    text: "Close",
    attrs: { type: "button" },
  });
  closeBtn.addEventListener("click", closeModal);

  openModal(
    createEl("div", {}, [
      createEl("h2", { text: "Leaderboard" }),
      createEl("p", { text: "No results yet" }),
      closeBtn,
    ]),
  );
});
