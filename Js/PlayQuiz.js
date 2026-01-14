import { AnswerBtn, PlayQuizPage, ResultPage } from "./Dom.js";

AnswerBtn.addEventListener("click", () => {
  PlayQuizPage.classList.remove("show");
  ResultPage.classList.add("show");
  console.log("click");
});
