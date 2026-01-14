import { StartScreen, ChosePage, BackBtn } from "./Dom.js";

BackBtn.addEventListener("click", () => {
  ChosePage.classList.remove("show");
  StartScreen.classList.remove("hide");
});
