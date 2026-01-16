import { playQuiz } from "./PlayQuiz.js";
import { getQuizzesFromStorage } from "./Service.js";

import {
  StartScreen,
  ChosePage,
  BackBtn,
  PlayQuizPage,
  BackBtnDiv,
  ScoreInfo,
} from "./Dom.js";

BackBtn.addEventListener("click", () => {
  ChosePage.classList.remove("show");
  StartScreen.classList.remove("hide");
  BackBtnDiv.classList.remove("show");
});

ChosePage.addEventListener("click", (event) => {
  const button = event.target.closest(".quiz-btn");

  if (!button) return;

  ChosePage.classList.remove("show");
  PlayQuizPage.classList.add("show");
  BackBtnDiv.classList.remove("show");
  ScoreInfo.classList.add("show");

  const quizId = button.dataset.id;

  const quizzes = getQuizzesFromStorage();
  const selectedQuiz = quizzes.find((quiz) => quiz.id === quizId);
  console.log("Selected quiz:", quizId);
  playQuiz(selectedQuiz);
});
