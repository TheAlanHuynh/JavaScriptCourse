'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secertNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// EventListener Function to check your guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(secertNumber);

  // when there in no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // when player wins
  } else if (guess === secertNumber) {
    // Output Winning Statement:
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    // Output Winning Backgroud Colour:
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Increase Secert Number Box:
    document.querySelector('.number').style.width = '30rem';

    // Show Secert Number:
    document.querySelector('.number').textContent = secertNumber;

    // Check and update High Score:
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secertNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secertNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secertNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '💥 You Lost! Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Challenge #2:
/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element 'again' class and attach a click event handler

2. In the handler function, restore initial values of the score and secertNumber variables

3. Restore the initial conditions of the message, number, score and guess input field

4. Also restore the original background to color{#222} and number width (15rem)
*/

// EventListener Function to restart
document.querySelector('.again').addEventListener('click', function () {
  // Restore initial score value
  score = 20;
  document.querySelector('.score').textContent = score;

  // Restore secertNumber
  secertNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore condition message
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  // Restore guess
  document.querySelector('.guess').value = '';

  // Restore background color
  document.querySelector('body').style.backgroundColor = '#222';

  // Restore the width of secertNumer box
  document.querySelector('.number').style.width = '15rem';

  // Restore '?' for secertNumber bax
  document.querySelector('.number').textContent = '?';
});
