import { quizzes } from "./Data/quizzes.js";

const saveQuizzesToStorage = () => {
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
};

const initializeQuizStorage = () => {
  const storedQuizzes = localStorage.getItem("quizzes");

  if (storedQuizzes === null) {
    saveQuizzesToStorage(quizzes);
  }
};

const getQuizzesFromStorage = () => {
  const storedQuizzes = localStorage.getItem("quizzes");
  return JSON.parse(storedQuizzes);
};

export { initializeQuizStorage, getQuizzesFromStorage };
