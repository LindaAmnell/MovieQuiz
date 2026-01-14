import {
  StartScreen,
  ChosePage,
  BackBtn,
  ChosenQuizBtn,
  PlayQuizPage,
} from "./Dom.js";

BackBtn.addEventListener("click", () => {
  ChosePage.classList.remove("show");
  StartScreen.classList.remove("hide");
});

ChosenQuizBtn.addEventListener("click", () => {
  ChosePage.classList.remove("show");
  PlayQuizPage.classList.add("show");
});
