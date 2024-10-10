// Configuration
const phrases = [
  "A cyber newbie",
  "A hacker",
  "A student",
  "A developer",
  "A script kiddie",
  "A noob"
];

const typingSpeed = 200; // ms
const deleteSpeed = typingSpeed / 2; // ms
const delayBetweenWords = 200; // ms
const delayBeforeTyping = 1000; // ms

// State variables
let currentPhrase = [];
let currentPhraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let isEnd = false;

// Function to update the typing effect
function type() {
  if (isEnd) return;

  if (isDeleting) {
    currentPhrase.pop();
    letterIndex--;
  } else {
    currentPhrase.push(phrases[currentPhraseIndex][letterIndex]);
    letterIndex++;
  }

  document.getElementById('dynamic-text').textContent = currentPhrase.join('');

  if (!isDeleting && letterIndex === phrases[currentPhraseIndex].length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letterIndex === 0) {
    currentPhrase = [];
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(type, delayBetweenWords);
  } else {
    setTimeout(type, isDeleting ? deleteSpeed : typingSpeed);
  }
}

// Initialize typing effect on load
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, delayBeforeTyping);
});
