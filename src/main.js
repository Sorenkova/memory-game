import { createUI } from "./ui.js";
import { createGame } from "./game.js";
import { openModal, closeModal } from "./modal.js";
import { createWinContent } from "./modals.js";
import { saveResult } from "./storage.js";

const ui = createUI();
document.body.append(ui.app);

const game = createGame(ui, { onWin: handleWin });

function handleWin(moves) {
  saveResult(moves);
  openModal(
    createWinContent(moves, {
      onNewGame: () => {
        closeModal();
        game.start();
      },
      onClose: closeModal,
    }),
  );
}

ui.newGameBtn.addEventListener("click", game.start);
game.start();
