import { StartScreen, ChosePage, StartBtn } from "./Dom.js";

StartBtn.addEventListener("click", () => {
  StartScreen.classList.add("hide");
  ChosePage.classList.add("show");
  console.log("klick");
});
