import {
    checkGuess,
    evalResult
} from './compareUtils.js';

import { endGame } from './gameStateUtils.js';

// fluctuating variables
let userInput = document.getElementById('user-guess');
let guessCounter = document.getElementById('remaining-guesses');

// display areas
const inputBox = document.getElementById('input-box');
const counterBox = document.getElementById('guess-counter');
const evalBox = document.getElementById('guess-eval');
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
        endGame('win');
        return;
    }
	
    guessesRemaining--;
    userInput.value = '';
    guessCounter.textContent = guessesRemaining;

    if (guessesRemaining < 1) {
        endGame();
        return;
    }
});

// reset the game
resetButton.addEventListener('click', () => {
    inputBox.classList.remove('none');
    counterBox.classList.remove('none');
    endGameBox.classList.add('none');
    evalBox.classList.add('none');
	
    randomNumber = Math.ceil(Math.random() * 20);
    guessesRemaining = 4;
	
    guessCounter.textContent = guessesRemaining;
});