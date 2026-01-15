import { AnswerBtn, PlayQuizPage, ResultPage, ScoreInfo } from "./Dom.js";

AnswerBtn.addEventListener("click", () => {
  PlayQuizPage.classList.remove("show");
  ResultPage.classList.add("show");
  console.log("click");

  // add so it disepairs when the last question is done
  ScoreInfo.classList.remove("show");
});
