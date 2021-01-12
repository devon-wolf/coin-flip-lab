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
        return 'error!';
    }
}

function tooLow() {
    console.log('execute tooLow!');
    return 'tooLow';
}

function tooHigh() {
    console.log('execute tooHigh!');
    return 'tooHigh';
}

function justRight() {
    console.log('execute justRight!');
    return 'justRight';
}