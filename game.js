let secretNumber;
let attempts;

function startGame () {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    console.log('Загаданное число: ', secretNumber);
    makeGuess();
}

function makeGuess() {
    const userGuess = prompt("Угадай число от 1 до 100");

    if (userGuess === null) {
        alert('Игра окончена!');
        return;
    } 

    const guess = parseInt(userGuess);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
        alert('Пожалуйста, введите число от 1 до 100');
        makeGuess();
        return;
    }

    attempts ++;

    if (guess === secretNumber) {
        alert(`Поздравляем! Вы угадали число за ${attempts} попыток!`);
    } else
    if (guess > secretNumber) {
        alert('Загаданное число меньше');
        makeGuess();
        return;
    } else {
        alert('Загаданное число больше');
        makeGuess();
        return;
    }
}

document.getElementById("startGame1").addEventListener("click", startGame);


let score = 0;

function startMathGame() {
    const operations = ['+','-','*','/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10); 
    const correctAnswer = eval(`${num1} ${operation} ${num2}`); 

    const question = `Сколько будет ${num1} ${operation} ${num2}?`;
    const userAnswer = prompt(question);
    
    if (userAnswer === null) {
        alert('Игра завершена!');
        return;
    }

    const isCorrect = Math.abs(parseFloat(userAnswer) - correctAnswer) < 0.01;

    if (isCorrect) {
        score += 10;
        alert('Верно!');
    } else {
        alert(`Неверно! Правильный ответ: ${correctAnswer.toFixed(2)}`);
        }

        const playAgain = confirm('Хотите продолжить?');
    if (playAgain) {
        startMathGame();
    } else {
        alert(`Игра завершена! Ваш счёт: ${score}`);
    }
}

document.getElementById("startGame2").addEventListener("click", startMathGame);
