import { createUI } from "./ui.js";
import { createGame } from "./game.js";

const ui = createUI();
document.body.append(ui.app);

const game = createGame(ui, {
  onWin: (moves) => console.log("win", moves),
});

ui.newGameBtn.addEventListener("click", game.start);
game.start();
