// fluctuating variables
let userInput = document.getElementById('user-guess');
let guessesRemaining = document.getElementById('remaining-guesses');

// display areas
const evalBox = document.getElementById('guess-eval');
const counterBox = document.getElementById('guess-counter');
const endGameBox = document.getElementById('game-over');

// buttons
const guessButton = document.getElementById('submit-guess');
const resetButton = document.getElementById('reset-button');

console.log(userInput, guessesRemaining, evalBox, counterBox, endGameBox, guessButton, resetButton);

// initialize state
guessesRemaining = 4;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    console.log('Someone clicked the guess button.');
});

resetButton.addEventListener('click', () => {
    console.log('Someone clicked the reset button.');
});