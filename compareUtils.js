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