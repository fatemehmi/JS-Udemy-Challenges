'use strict';
// For getting the value of input element, we use the value property, also to set a value. Also to get the text-based element value, we use textContent property.

let score = 20; // All the data that is relevant to the application, like score and secretNumber, are called state variable.

let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber) {
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        document.querySelector('.message').textContent = '🎉Correct Number!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = guess;
        document.querySelector('.number').style.width = '30rem';
    }

    if (score > 1) {
        if (guess > secretNumber) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
        }
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent =
            '💣 You lost the game!';
        document.querySelector('.score').textContent = 0;
    }
}); // There is multiple ways to listen for events in JavaScript. But addEventListener method is the best one and also the most used one.

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
