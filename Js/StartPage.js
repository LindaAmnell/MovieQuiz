import {
  StartScreen,
  ChosePage,
  StartBtn,
  BackBtnDiv,
  quizDiv,
} from "./Dom.js";
import { getQuizzesFromStorage, initializeQuizStorage } from "./Service.js";
import { renderQuizButtons } from "./Render.js";

let quizList = [];

StartBtn.addEventListener("click", () => {
  StartScreen.classList.add("hide");
  ChosePage.classList.add("show");
  console.log("klick");
  BackBtnDiv.classList.add("show");

  initializeQuizStorage();
  quizList = getQuizzesFromStorage();

  quizDiv.innerHTML = "";
  renderQuizButtons(quizList, quizDiv);
});
