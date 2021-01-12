import {
    checkGuess,
    evalResult
} from './compareUtils.js';

import { endGame } from './gameStateUtils.js';

// fluctuating variables
let userInput = document.getElementById('user-guess');
let guessCounter = document.getElementById('remaining-guesses');

// display areas
const counterBox = document.getElementById('guess-counter');
const endGameBox = document.getElementById('game-over');

// buttons
const guessButton = document.getElementById('submit-guess');
const resetButton = document.getElementById('reset-button');

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesRemaining = 4;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {	
    const guess = userInput.valueAsNumber;	
    const result = checkGuess(guess, randomNumber);	
    evalResult(result);
    if (result === 0) {
        endGame();
        return;
    }
	
    guessesRemaining--;
    if (guessesRemaining < 1) {
        endGame();
        return;
    }
    guessCounter.textContent = guessesRemaining;
});

resetButton.addEventListener('click', () => {
    // console.log('Someone clicked the reset button.');
});