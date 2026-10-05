import { createUI } from "./ui.js";
import { createGame } from "./game.js";
import { openModal, closeModal } from "./modal.js";
import { createWinContent, createLeaderboardContent } from "./modals.js";
import { saveResult, getResults } from "./storage.js";

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
ui.leaderboardBtn.addEventListener("click", () => {
  openModal(createLeaderboardContent(getResults(), { onClose: closeModal }));
});

game.start();
