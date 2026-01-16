//sections
const StartScreen = document.querySelector(".start-page");
const ChosePage = document.querySelector(".choseQuiz-page");
const PlayQuizPage = document.querySelector(".quiz-page");
const ResultPage = document.querySelector(".result-page");
const BackBtnDiv = document.querySelector(".backBtn-div");
const ScoreInfo = document.querySelector(".score-div");
const quizDiv = document.querySelector("#quiz");

//buttons
const BackBtn = document.querySelector("#back-btn");
const StartBtn = document.querySelector("#start-btn");
// const AnswerBtn = document.querySelector(".answer-btn");
const BackToStartBtn = document.querySelector("#goTo-startPage-btn");
const BackToQuiz = document.querySelector("#goTo-quizPage-btn");

export {
  StartBtn,
  StartScreen,
  ChosePage,
  BackBtn,
  PlayQuizPage,
  ResultPage,
  BackToStartBtn,
  BackToQuiz,
  BackBtnDiv,
  ScoreInfo,
  quizDiv,
};
