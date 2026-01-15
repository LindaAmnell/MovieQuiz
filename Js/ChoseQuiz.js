import {
  StartScreen,
  ChosePage,
  BackBtn,
  ChosenQuizBtn,
  PlayQuizPage,
  BackBtnDiv,
  ScoreInfo,
} from "./Dom.js";

BackBtn.addEventListener("click", () => {
  ChosePage.classList.remove("show");
  StartScreen.classList.remove("hide");
  BackBtnDiv.classList.remove("show");
});

ChosenQuizBtn.addEventListener("click", () => {
  ChosePage.classList.remove("show");
  PlayQuizPage.classList.add("show");
  BackBtnDiv.classList.remove("show");
  ScoreInfo.classList.add("show");
});
