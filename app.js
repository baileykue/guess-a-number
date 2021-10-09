const button = document.getElementById('button');
const replayButton = document.getElementById('play-again');
const input = document.getElementById('input');
let userMessage = document.getElementById('user-message');
let correctNum = Math.floor(Math.random() * (20 - 1) + 1);
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const computerGuess = document.getElementById('computer-guess');

let wins = 0
let losses = 0
let guessesNum = 4;

button.classList.remove('hide');

button.addEventListener('click', () => {

    if (numberCheck(input.value) !== true) {
        return;
    }
    document.getElementById('input-error').innerHTML = "";
    guessesNum--;
    if (correctNum === Number(input.value)) {
        userMessage.textContent = 'You are correct! Well done!';
        replayButton.classList.remove('hide');
        button.classList.add('hide');
        wins++;
        winSpan.textContent = wins;
    } else if (guessesNum === 0) {
        userMessage.textContent = 'You have lost! No more guesses for you';
        replayButton.classList.remove('hide');
        button.classList.add('hide');
        losses++;
        lossSpan.textContent = losses;
        computerGuess.classList.remove('hide');
        computerGuess.textContent = `The correct number was ${correctNum}`;

    } else if (Number(input.value) > correctNum) {
        userMessage.textContent = `Your guess is too high! You have ${guessesNum} 
    guesses left`;
    } else if (Number(input.value) < correctNum) {
        userMessage.textContent = `Your guess is too low! you have ${guessesNum} 
    guesses left`;
    }
});

replayButton.addEventListener('click', () => {
    guessesNum = 4;
    replayButton.classList.add('hide');
    button.classList.remove('hide');
    userMessage.textContent = '';
    input.value = '';
    location.reload(correctNum);
});

function numberCheck() {
    let n = document.getElementById('input').value;
    if (isNaN(n)) {
        document.getElementById(
            'input-error').innerHTML =
            'Please enter Numeric value';
        return false;
    } else { return true; }
}