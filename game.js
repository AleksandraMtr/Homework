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


document.getElementById("startButton").addEventListener("click", startGame);

