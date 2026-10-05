const STORAGE_KEY = "memory-game-results";
const MAX_RESULTS = 10;

function sortResults(results) {
  return results.sort((a, b) => a.moves - b.moves || a.timestamp - b.timestamp);
}

export function getResults() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? sortResults(data) : [];
  } catch {
    return [];
  }
}

export function saveResult(moves) {
  const results = getResults();
  results.push({ moves, timestamp: Date.now() });
  const top = sortResults(results).slice(0, MAX_RESULTS);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(top));
  } catch {}
}
