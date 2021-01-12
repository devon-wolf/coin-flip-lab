# guess-a-number-lab

## Goals:
- User has four guesses to find a number between 1 and 20 (inclusive)
- After each incorrect guess, the page should tell them whether their guess was too high or too low
- If they guess correctly or use up all their guesses, further input should be disabled and the page should display a final "win" or "lose" message

## HTML Setup:
1. Number input
	- so user can enter their guesses
2. Button
	- to submit the guess and trigger state changes
3. Guesses remaining span/div
	- to display the remaining guesses
4. Too high/too low/you got it/you're out of guesses span/div
	- to tell the user what's wrong with their guess/tell them they're right/tell them it's over

## Next:
1. Grab DOM elements
2. Initialize state
	- set random number (`let randomNumber = Math.ceil(Math.random() * 20);`)
	- set guesses remaining (`let guessesRemaining = 4;`)
3. Add event listener to submit button
	- on click:
		- **State**: decrement remaining guesses by one (`guessesRemaining--`)
		- Store user guess in a variable (`const userGuess = userInput.valueAsNumber`)
		- Compare `userGuess` with `randomNumber`
		- **View**:
			- If `userGuess` > `randomNumber`, update `resultsSpan` to "too high"
			- If `userGuess` < `randomNumber`, update `resultsSpan` to "too low"
			- If `userGuess` === `randomNumber`, congratulate the user and end the game
				- Disable the input if they win
			- Check if `guessesRemaining` > 0; if not, disable the input and add a losing message
			- Inform user how many `guessesRemaining`

## Should have:
- `compareNumbers` function that compares `userGuess` to `randomNumber`
	- it will return:
		- 0 if the numbers are the same
		- -1 if the guess is too low
		- 1 if the guess is too high
		
## Stretch Goal: Reset Button
1. Add another event listener to `resetButton`
	- On click:
		- **State**:
			- Reset `guessesRemaining` state to 4
			- Create new `randomNumber`
		- **View**:
			- re-enable inputs if they have been disabled
			- fix/update the game text

## Stretch Goal: UI Units
- Divide the UI-updating tasks into their own functions:
	- decrementing guesses
	- display too low message
	- display too high message
	- disable gameplay/input
	- display of loss
	- display of win