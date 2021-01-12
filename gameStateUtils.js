const inputBox = document.getElementById('input-box');
const counterBox = document.getElementById('guess-counter');
const endGameBox = document.getElementById('game-over');

export function endGame() {
    inputBox.style.display = 'none';
    counterBox.style.display = 'none';
    endGameBox.textContent = 'That\'s the end of the game!';
}