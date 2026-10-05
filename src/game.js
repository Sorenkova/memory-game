import { createDeck } from "./cards.js";
import { renderBoard } from "./ui.js";

const TOTAL_PAIRS = 8;
const MISMATCH_DELAY = 1000;

export function createGame(ui, { onWin } = {}) {
  let deck = [];
  let firstCard = null;
  let locked = false;
  let finished = false;
  let moves = 0;
  let pairs = 0;
  let timerId = null;

  const getEl = (uid) => ui.board.querySelector(`[data-uid="${uid}"]`);

  function updateCounters() {
    ui.movesValue.textContent = String(moves);
    ui.pairsValue.textContent = String(pairs);
  }

  function handleBoardClick(event) {
    const el = event.target.closest(".card");
    if (!el || locked || finished) return;
    if (
      el.classList.contains("card--open") ||
      el.classList.contains("card--matched")
    ) {
      return;
    }

    const card = deck.find((c) => c.uid === Number(el.dataset.uid));
    el.classList.add("card--open");

    if (!firstCard) {
      firstCard = card;
      return;
    }

    moves += 1;
    const firstEl = getEl(firstCard.uid);

    if (card.id === firstCard.id) {
      [firstEl, el].forEach((item) => {
        item.classList.remove("card--open");
        item.classList.add("card--matched");
      });
      pairs += 1;
      firstCard = null;
      updateCounters();

      if (pairs === TOTAL_PAIRS) {
        finished = true;
        if (onWin) onWin(moves);
      }
      return;
    }

    updateCounters();
    locked = true;
    timerId = setTimeout(() => {
      firstEl.classList.remove("card--open");
      el.classList.remove("card--open");
      firstCard = null;
      locked = false;
      timerId = null;
    }, MISMATCH_DELAY);
  }

  function start() {
    clearTimeout(timerId);
    timerId = null;
    firstCard = null;
    locked = false;
    finished = false;
    moves = 0;
    pairs = 0;
    deck = createDeck();
    renderBoard(ui.board, deck);
    updateCounters();
  }

  ui.board.addEventListener("click", handleBoardClick);

  return { start };
}
