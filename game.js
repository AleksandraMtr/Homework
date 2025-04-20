// ПЕРВАЯ ИГРА(Угадай число)
let secretNumber;
let attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  console.log("Загаданное число: ", secretNumber);
  makeGuess();
}

function makeGuess() {
  const userGuess = prompt("Угадай число от 1 до 100");

  if (userGuess === null) {
    alert("Игра окончена!");
    return;
  }

  const guess = parseInt(userGuess);

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
    alert("Пожалуйста, введите число от 1 до 100");
    makeGuess();
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    alert(`Поздравляем! Вы угадали число за ${attempts} попыток!`);
  } else if (guess > secretNumber) {
    alert("Загаданное число меньше");
    makeGuess();
    return;
  } else {
    alert("Загаданное число больше");
    makeGuess();
    return;
  }
}

document.getElementById("startGame1").addEventListener("click", startGame);

// ВТОРАЯ ИГРА(Простая арифметика)
let score = 0;

function startMathGame() {
  const operations = ["+", "-", "*", "/"];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const correctAnswer = eval(`${num1} ${operation} ${num2}`);

  const question = `Сколько будет ${num1} ${operation} ${num2}?`;
  const userAnswer = prompt(question);

  if (userAnswer === null) {
    alert("Игра завершена!");
    return;
  }

  const isCorrect = Math.abs(parseFloat(userAnswer) - correctAnswer) < 0.01;

  if (isCorrect) {
    score += 10;
    alert("Верно!");
  } else {
    alert(`Неверно! Правильный ответ: ${correctAnswer.toFixed(2)}`);
  }

  const playAgain = confirm("Хотите продолжить?");
  if (playAgain) {
    startMathGame();
  } else {
    alert(`Игра завершена! Ваш счёт: ${score}`);
  }
}

document.getElementById("startGame2").addEventListener("click", startMathGame);

// ТРЕТЬЯ ИГРА(Переверни текст)
function startReversGame() {
  const userQuestion = prompt(
    "Введите любой текст, который хотите перевернуть"
  );

  if (userQuestion) {
    const reversText = userQuestion.split("").reverse().join("");
    alert(`${reversText}`);
  } else {
    alert("Вы не ввели текст");
  }
}

document
  .getElementById("startGame3")
  .addEventListener("click", startReversGame);

// ЧЕТВЕРТАЯ ИГРА(Викторина)
const quiz = [
  {
    question: "Какой цвет небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2,
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2,
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2,
  },
];

function startVictoryGame() {
  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];
    const answer = prompt(
      `${q.question}\n\n${q.options.join(
        "\n"
      )}\n\n(Введите номер правильного ответа)`
    );

    if (parseInt(answer) === q.correctAnswer) {
      score++;
    }
  }

  alert(`Результат: ${score} из ${quiz.length}`);
}

document
  .getElementById("startGame4")
  .addEventListener("click", startVictoryGame);
