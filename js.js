const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;
let count = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  count = 0;
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  count = 0;
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    nextButton;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Започни отначало";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  if (!(element == document.body)) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  } else {
    if (count == 0) {
      clearStatusClass(element);
      if (correct) {
        element.classList.add("correct");
      } else {
        element.classList.add("wrong");
      }
      count++;
    }
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: 'Коя област отговаря на буквата "E"?',
    answers: [
      { text: "Кърджали", correct: false },
      { text: "Бургас", correct: false },
      { text: "Благоевград", correct: true },
      { text: "Русе", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "А"?',
    answers: [
      { text: "Габрово", correct: false },
      { text: "Благоевград", correct: false },
      { text: "София - област", correct: false },
      { text: "Бургас", correct: true },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "В"?',
    answers: [
      { text: "Габрово", correct: false },
      { text: "Перник", correct: false },
      { text: "Варна", correct: true },
      { text: "Хасково", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "ВТ"?',
    answers: [
      { text: "Търговище", correct: false },
      { text: "Благоевград", correct: false },
      { text: "Велико Търново", correct: true },
      { text: "Смолян", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "ВН"?',
    answers: [
      { text: "Видин", correct: true },
      { text: "София - столица", correct: false },
      { text: "Търговище", correct: false },
      { text: "Перник", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "ВР"?',
    answers: [
      { text: "Габрово", correct: false },
      { text: "Благоевград", correct: false },
      { text: "София - област", correct: false },
      { text: "Враца", correct: true },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "ЕВ"?',
    answers: [
      { text: "Сливен", correct: false },
      { text: "Монтана", correct: false },
      { text: "Габрово", correct: true },
      { text: "Варна", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "ТХ"?',
    answers: [
      { text: "Стара Загора", correct: false },
      { text: "Добрич", correct: true },
      { text: "Кюстендил", correct: false },
      { text: "Хасково", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "К"?',
    answers: [
      { text: "Кюстендил", correct: false },
      { text: "Велико Търново", correct: false },
      { text: "Търговище", correct: false },
      { text: "Кърджали", correct: true },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "КН"?',
    answers: [
      { text: "Благоевград", correct: false },
      { text: "Пловдив", correct: false },
      { text: "Кюстендил", correct: true },
      { text: "Варна", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "ОВ"?',
    answers: [
      { text: "Ловеч", correct: true },
      { text: "Търговище", correct: false },
      { text: "Кюстендил", correct: false },
      { text: "София - област", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "М"?',
    answers: [
      { text: "Перник", correct: false },
      { text: "София - столица", correct: false },
      { text: "Монтана", correct: true },
      { text: "Стара Загора", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "РА"?',
    answers: [
      { text: "Пловдив", correct: false },
      { text: "Стара Загора", correct: false },
      { text: "Габрово", correct: false },
      { text: "Пазарджик", correct: true },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "РК"?',
    answers: [
      { text: "Перник", correct: true },
      { text: "Варна", correct: false },
      { text: "Плевен", correct: false },
      { text: "Хасково", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "ЕН"?',
    answers: [
      { text: "Шумен", correct: false },
      { text: "Плевен", correct: true },
      { text: "Разград", correct: false },
      { text: "София - столица", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "РВ"?',
    answers: [
      { text: "Пловдив", correct: true },
      { text: "Сливен", correct: false },
      { text: "Благоевград", correct: false },
      { text: "Велико Търново", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "РР"?',
    answers: [
      { text: "Бургас", correct: false },
      { text: "Разград", correct: true },
      { text: "Стара Загора", correct: false },
      { text: "Перник", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "Р"?',
    answers: [
      { text: "Русе", correct: true },
      { text: "Варна", correct: false },
      { text: "Търговище", correct: false },
      { text: "Сливен", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "СС"?',
    answers: [
      { text: "Велико Търново", correct: false },
      { text: "Враца", correct: false },
      { text: "Перник", correct: false },
      { text: "Силистра", correct: true },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "СН"?',
    answers: [
      { text: "Стара Загора", correct: false },
      { text: "Сливен", correct: true },
      { text: "Бургас", correct: false },
      { text: "Плевен", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "СМ"?',
    answers: [
      { text: "Бургас", correct: false },
      { text: "Сливен", correct: false },
      { text: "Стара Загора", correct: false },
      { text: "Смолян", correct: true },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "СО"?',
    answers: [
      { text: "Ловеч", correct: false },
      { text: "София - област", correct: true },
      { text: "Перник", correct: false },
      { text: "Разград", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "С, СА, СВ"?',
    answers: [
      { text: "София - столица", correct: true },
      { text: "Благоевград", correct: false },
      { text: "Монтана", correct: false },
      { text: "Бургас", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквите "СТ"?',
    answers: [
      { text: "Кюстендил", correct: false },
      { text: "Ловеч", correct: false },
      { text: "Стара Загора", correct: true },
      { text: "Пловдив", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "Т"?',
    answers: [
      { text: "Стара Загора", correct: false },
      { text: "Търговище", correct: true },
      { text: "Ямбол", correct: false },
      { text: "Габрово", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "Х"?',
    answers: [
      { text: "Пазарджик", correct: false },
      { text: "София - област", correct: false },
      { text: "София - столица", correct: false },
      { text: "Хасково", correct: true },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "Н"?',
    answers: [
      { text: "Бургас", correct: false },
      { text: "Добрич", correct: false },
      { text: "Шумен", correct: true },
      { text: "Плевен", correct: false },
    ],
  },

  {
    question: 'Коя област отговаря на буквата "У"?',
    answers: [
      { text: "Видин", correct: false },
      { text: "Пловдив", correct: false },
      { text: "Габрово", correct: false },
      { text: "Ямбол", correct: true },
    ],
  },
];
