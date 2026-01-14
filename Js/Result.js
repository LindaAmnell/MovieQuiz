import {
  BackToQuiz,
  BackToStartBtn,
  ResultPage,
  StartScreen,
  ChosePage,
} from "./Dom.js";

BackToQuiz.addEventListener("click", () => {
  ResultPage.classList.remove("show");
  ChosePage.classList.add("show");
});
BackToStartBtn.addEventListener("click", () => {
  ResultPage.classList.remove("show");
  StartScreen.classList.remove("hide");
});
