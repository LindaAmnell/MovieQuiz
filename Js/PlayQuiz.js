import { PlayQuizPage, ResultPage } from "./Dom.js";

import {
  renderQuizTitle,
  renderQuestionText,
  renderAnswerButtons,
} from "./Render.js";

let currentQuiz = null;
let currentQuestionIndex = 0;

const playQuiz = (quiz) => {
  currentQuiz = quiz;
  currentQuestionIndex = 0;
  showCurrentQuestion();
};

const showCurrentQuestion = () => {
  const question = currentQuiz.questions[currentQuestionIndex];

  PlayQuizPage.innerHTML = "";

  renderQuizTitle(currentQuiz.title, PlayQuizPage);
  renderQuestionText(question.clue, PlayQuizPage);

  const answerContainer = document.createElement("div");
  answerContainer.classList.add("btn-section");
  PlayQuizPage.appendChild(answerContainer);

  renderAnswerButtons(question.options, answerContainer);
};

PlayQuizPage.addEventListener("click", (event) => {
  const button = event.target.closest(".answer-btn");
  if (!button) return;

  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuiz.questions.length) {
    showCurrentQuestion();
  } else {
    console.log("Quiz finished");
    PlayQuizPage.classList.remove("show");
    ResultPage.classList.add("show");
  }
});

export { playQuiz };
