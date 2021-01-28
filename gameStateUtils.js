// display areas
const inputBox = document.getElementById('input-box');
const counterBox = document.getElementById('guess-counter');
const endGameBox = document.getElementById('game-over');
const evalBox = document.getElementById('guess-eval');

export function endGame(state) {
    endGameBox.classList.remove('none');
	
    inputBox.classList.add('none');
    counterBox.classList.add('none');
    if (state === 'win') {
        return winGame();
    }
    else {
        evalBox.classList.add('none');
        return loseGame();
    }
}

export function resetGame() {
    inputBox.classList.remove('none');
    counterBox.classList.remove('none');
    endGameBox.classList.add('none');
    evalBox.classList.add('none');
}

function winGame() {
    endGameBox.textContent = 'Congratulations, you won!';
}

function loseGame() {
    endGameBox.textContent = 'Sorry, you lost.';
}