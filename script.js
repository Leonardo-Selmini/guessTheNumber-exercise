'use strict';

let secretNumber = getRandomFrom1To(20);
let score = 20;
let highscore = 0;

//! CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  if (score > 0) {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      displayText('.message', 'Insert a number!');

      // when guess is correct
    } else if (guess === secretNumber) {
      displayText('.message', 'Correct!');
      displayText('.number', secretNumber);
      document.querySelector('body').style.backgroundColor = 'green';

      if (score > highscore) {
        highscore = score;
        displayText('.highscore', highscore);
      }

      // when guess is different
    } else if (guess !== secretNumber) {
      score--;
      if (score > 0) {
        displayText(
          '.message',
          guess > secretNumber ? 'Too high!' : 'Too low!'
        );
      } else {
        displayText('.message', 'You lost the game!');
      }

      displayText('.score', score);
      document.querySelector('.guess').value = null;
    }
  }
});

//! RESET BUTTON
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = getRandomFrom1To(20);
  score = 20;

  displayText('.number', '?');
  displayText('.score', score);
  displayText('.message', 'Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = null;
});

//! FUNCTIONS
function displayText(selector, text) {
  document.querySelector(selector).textContent = text;
}

function getRandomFrom1To(max) {
  return Math.trunc(Math.random() * max) + 1;
}
