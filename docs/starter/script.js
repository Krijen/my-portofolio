'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

let score0 = 0;
let score1 = 0;

let playing = true;

function rollDice() {
  if (playing) {
    let dice = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    if (dice === 1) {
      switchPlayer();
    }
  }
}

function holdScore() {
  if (playing) {
    if (activePlayer === 0) {
      score0 += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = score0;
    } else {
      score1 += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = score1;
    }
    if (!doWeHaveAWinner(score0, score1)) {
      switchPlayer();
    }
  }
}

function doWeHaveAWinner(score0, score1) {
  if (score0 >= 100 || score1 >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document.getElementById(`score--${activePlayer}`).textContent = 'Winner!';
    diceEl.classList.add('hidden');
    playing = false;
    return true;
  }
}

function newGame() {
  hideDice();
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  score0 = 0;
  score1 = 0;
  currentScore = 0;
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  if (activePlayer === 1) {
    switchPlayer();
  }
}

function switchPlayer() {
  hideDice();
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

function hideDice() {
  diceEl.classList.add('hidden');
}

function showDice() {
  diceEl.classList.remove('hidden');
}

rollBtn.onclick = rollDice;
holdBtn.onclick = holdScore;
newBtn.onclick = newGame;

// 'use strict';

// let score0 = document.getElementById('score--0');
// const score1 = document.getElementById('score--1');

// const diceImg = document.querySelector('.dice');

// const rollKnapp = document.querySelector('.btn--roll');

// const current0 = document.getElementById('current--0');
// const current1 = document.getElementById('current--1');

// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');
// const holdKnapp = document.querySelector('.btn--hold');

// const newgameKnapp = document.querySelector('.btn--new');
// let activePlayer = 0;
// score0.textContent = 0;
// score1.textContent = 0;

// let currentScore = 0;

// let totalScore0 = 0;
// let totalScore1 = 0;

// diceImg.classList.add('hidden');

// function rollDice() {
//   showDice();
//   let dice = Math.floor(Math.random() * 6) + 1;
//   if (dice !== 1) {
//     currentScore += dice;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//     changeImageDice(dice);
//   } else {
//     current0.textContent = 0;
//     current1.textContent = 0;
//     switchPlayer();
//     hideDice();
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     currentScore = 0;
//   }

//   // if (player1.classList.contains('player--active')) {
//   //   current1.textContent = dice;
//   // }
// }

// function hold() {
//   if (activePlayer === 0) {
//     totalScore0 += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent = totalScore0;
//     if (totalScore0 >= 20) {
//       score0.textContent = 'Winner!';
//     } else if (totalScore1 >= 20) {
//       score1.textContent = 'Winner';
//     }
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     switchPlayer();
//   } else {
//     totalScore1 += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent = totalScore1;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     switchPlayer();
//   }
// }

// function changeImageDice(number) {
//   diceImg.src = 'dice-' + number + '.png';
// }

// function switchPlayer() {
//   player0.classList.toggle('player--active');
//   player1.classList.toggle('player--active');
//   currentScore = 0;
//   hideDice();
// }

// function hideDice() {
//   diceImg.classList.add('hidden');
// }

// function showDice() {
//   diceImg.classList.remove('hidden');
// }

// function newGame() {
//   score0.textContent = 0;
//   score1.textContent = 0;
//   current0.textContent = 0;
//   current1.textContent = 0;
//   currentScore = 0;
//   totalScore0 = 0;
//   totalScore1 = 0;
//   diceImg.classList.add('hidden');
//   if (activePlayer === 1) {
//     switchPlayer();
//   }
// }

// rollKnapp.onclick = rollDice;
// newgameKnapp.onclick = newGame;
// holdKnapp.onclick = hold;
