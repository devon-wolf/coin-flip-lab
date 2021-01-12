const evalBox = document.getElementById('guess-eval');

export function checkGuess(guess, answer) {
    if (guess === answer) {
        return 0;
    }
    else if (guess < answer) {
        return -1;
    }
    else {
        return 1;
    }
}

export function evalResult(value) {
    if (value === -1) {
        return tooLow();
    }
    else if (value === 1) {
        return tooHigh();
    }
    else if (value === 0) {
        return justRight();
    }
    else {
        console.log('Goldilocks got an unexpected argument!');
    }
}

function tooLow() {
    evalBox.textContent = 'That was too low.';
}

function tooHigh() {
    evalBox.textContent = 'That was too high.';
}

function justRight() {
    evalBox.textContent = 'You got it!';
}