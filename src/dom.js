export function createEl(tag, { className, text, attrs } = {}, children = []) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) =>
      el.setAttribute(key, value),
    );
  }
  el.append(...children);
  return el;
}
