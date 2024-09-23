'use strict';

const player1 = document.querySelector('.player--0');
const scorePlayer1 = document.querySelector('#score--0');
const currentPlayer1 = document.getElementById('current--0');
const player2 = document.querySelector('.player--1');
const scorePlayer2 = document.querySelector('#score--1');
const currentPlayer2 = document.querySelector('#current--1');
const dicePic = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const roll = document.querySelector('.btn--roll');
const win = document.querySelector('.win');

dicePic.classList.add('hidden');
win.classList.add('hidden');

newGame.addEventListener('click', function () {
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    currentPlayer1.textContent = 0;
    currentPlayer2.textContent = 0;
});

btnHold.addEventListener('click', function () {
    if (player1.classList.contains('player--active')) {
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        scorePlayer1.textContent =
            Number(scorePlayer1.textContent) +
            Number(currentPlayer1.textContent);
        currentPlayer1.textContent = 0;
        if (Number(scorePlayer1.textContent) > 100) {
            win.textContent = '🎉 Player 1 wins :)';
            dicePic.classList.add('hidden');
            win.classList.remove('hidden');
        }
    } else {
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
        scorePlayer2.textContent =
            Number(scorePlayer2.textContent) +
            Number(currentPlayer2.textContent);
        currentPlayer2.textContent = 0;
        if (Number(scorePlayer2.textContent) > 100) {
            win.textContent = '🎉 Player 2 wins :)';
            dicePic.classList.add('hidden');
            win.classList.remove('hidden');
        }
    }
});

roll.addEventListener('click', function () {
    const diceRoll = Math.trunc(Math.random() * 6 + 1);
    dicePic.remove('hidden');
    dicePic.src = `dice-${diceRoll}.png`;
    if (diceRoll === 1) {
        if (player1.classList.contains('player--active')) {
            player1.classList.remove('player--active');
            player2.classList.add('player--active');
            currentPlayer1.textContent = 0;
        } else {
            player1.classList.add('player--active');
            player2.classList.remove('player--active');
            currentPlayer2.textContent = 0;
        }
    } else {
        if (player1.classList.contains('player--active')) {
            currentPlayer1.textContent =
                Number(currentPlayer1.textContent) + diceRoll;
        } else {
            currentPlayer2.textContent =
                Number(currentPlayer2.textContent) + diceRoll;
        }
    }
});
