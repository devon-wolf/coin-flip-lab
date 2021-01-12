import { checkGuess } from './compareUtils.js';

// fluctuating variables
let userInput = document.getElementById('user-guess');
let guessCounter = document.getElementById('remaining-guesses');

// display areas
const evalBox = document.getElementById('guess-eval');
const counterBox = document.getElementById('guess-counter');
const endGameBox = document.getElementById('game-over');

// buttons
const guessButton = document.getElementById('submit-guess');
const resetButton = document.getElementById('reset-button');

// console.log(userInput, guessCounter, evalBox, counterBox, endGameBox, guessButton, resetButton);

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

// console.log(randomNumber, guessesRemaining);

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
	// console.log('Someone clicked the guess button.');
	
    const guess = userInput.valueAsNumber;
	// console.log(guess, randomNumber);
	
    const result = checkGuess(guess, randomNumber);
    // console.log(result);

    guessesRemaining--;
    guessCounter.textContent = guessesRemaining;
});

resetButton.addEventListener('click', () => {
    // console.log('Someone clicked the reset button.');
});