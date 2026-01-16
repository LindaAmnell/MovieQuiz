//creats Quiz buttons
const createButton = (text, className, dataId) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.classList.add(className);

  if (dataId) {
    button.dataset.id = dataId;
  }

  return button;
};

const renderQuizButtons = (quizzes, container) => {
  quizzes.forEach((quiz) => {
    const button = createButton(quiz.title, "quiz-btn", quiz.id);
    container.appendChild(button);
  });
};

//creats playquiz page

const renderQuizTitle = (title, container) => {
  const quizName = document.createElement("p");
  quizName.innerText = title;
  quizName.classList.add("quiz-name");

  container.appendChild(quizName);
};

const renderQuestionText = (text, container) => {
  const question = document.createElement("p");
  question.innerText = text;
  question.classList.add("quiz-text");

  container.appendChild(question);
};

const renderAnswerButtons = (answers, container) => {
  container.innerHTML = "";

  answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.dataset.index = index;

    container.appendChild(button);
  });
};

export {
  createButton,
  renderQuizButtons,
  renderAnswerButtons,
  renderQuestionText,
  renderQuizTitle,
};
