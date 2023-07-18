'use strict';

// seleting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const activePlayer1 = document.querySelector('.player--0');
const activePlayer2 = document.querySelector('.player--1');
const buttonPressCount = 0;
let currentScore = 0;
let activePlayer = 0;
let totalScore = [0, 0];
let playing = true;

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const swicthPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  activePlayer1.classList.toggle('player--active');
  activePlayer2.classList.toggle('player--active');
};

document.querySelector('.btn--roll').addEventListener('click', function () {
  // generating random die

  if (playing) {
    const genRandom = Math.trunc(Math.random() * 6) + 1;
    console.log(genRandom);
    diceEl.src = `dice-${genRandom}.png`;
    diceEl.classList.remove('hidden');

    if (genRandom !== 1) {
      // adding dice numbers
      currentScore += genRandom;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switching to the next player
      swicthPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // pressing button stores the total score
  // then display in current player window
  console.log('button clicked!');
  totalScore[activePlayer] = currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  // if any player gets 100, wins
  if (currentScore >= 100) {
    playing = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // player gets swicthed as the button is entered
    swicthPlayer();
  }
});

btnNew.addEventListener('click', function () {
  location.reload();
});
