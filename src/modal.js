import { createEl } from "./dom.js";

let active = null;

export function openModal(content) {
  closeModal();

  const box = createEl(
    "div",
    {
      className: "modal",
      attrs: { role: "dialog", "aria-modal": "true", tabindex: "-1" },
    },
    [content],
  );
  const overlay = createEl("div", { className: "modal-overlay" }, [box]);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  const onKeydown = (event) => {
    if (event.key === "Escape") closeModal();
  };
  document.addEventListener("keydown", onKeydown);

  const app = document.querySelector(".app");
  app.inert = true;
  document.body.classList.add("no-scroll");
  document.body.append(overlay);
  box.focus();

  active = { overlay, onKeydown, app };
}

export function closeModal() {
  if (!active) return;

  document.removeEventListener("keydown", active.onKeydown);
  active.overlay.remove();
  active.app.inert = false;
  document.body.classList.remove("no-scroll");
  active = null;
}
