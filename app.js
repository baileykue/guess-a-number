const button = document.getElementById('button');
const input = document.getElementById('input');
const userGuess = input.value;
let userMessage = document.getElementById('user-message');

let correctNum = Math.floor(Math.random()*(20-1)+1);

let guessesNum = 4;

button.addEventListener('click', () => {
  guessesNum--;
  console.log(guessesNum);
  console.log(correctNum);
  Number(userGuess.value);
  if (correctNum === userGuess) {
    userMessage.textContent = 'You are correct! Well done!';
  } else if (guessesNum === 0) {
    userMessage.textContent = 'You have lost! No more guesses for you';
  } else if (userGuess > correctNum) {
    userMessage.textContent = `Your guess is too high! You have ${guessesNum} 
    guesses left`;
  } else if (userGuess < correctNum) {
    userMessage.textContent = `Your guess is too low! you have ${guessesNum} 
    guesses left`;
  } 
  /*else {
    userMessage.textContent = 'Please Make sure you are entering a number between 1-20!';
    guessesNum++;
  }*/
})