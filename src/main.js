import { createEl } from "./dom.js";

const app = createEl("div", { className: "app" }, [
  createEl("h1", { text: "Memory Game" }),
]);

document.body.append(app);
