import { StartScreen, ChosePage, StartBtn, BackBtnDiv } from "./Dom.js";

StartBtn.addEventListener("click", () => {
  StartScreen.classList.add("hide");
  ChosePage.classList.add("show");
  console.log("klick");
  BackBtnDiv.classList.add("show");
});
