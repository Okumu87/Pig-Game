"use strict ";

// Selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
// Scores
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
// dice
const diceEl = document.querySelector(".dice");
// Buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Stored values
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; //Change to current player later
  } else {
    // Switch to next player
  }
});
