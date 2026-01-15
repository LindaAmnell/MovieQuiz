import { AnswerBtn, PlayQuizPage, ResultPage, ScoreInfo } from "./Dom.js";

AnswerBtn.addEventListener("click", () => {
  PlayQuizPage.classList.remove("show");
  ResultPage.classList.add("show");
  console.log("click");

  //  Fix: hides too early, should hide after last question
  ScoreInfo.classList.remove("show");
});
