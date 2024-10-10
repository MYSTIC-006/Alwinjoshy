const phrases = ["A cyber newbie", "A hacker", "A student", "A developer", "A script kiddie", "A noob"];
let currentPhrase = [];
let currentPhraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
  if (isEnd) {
    return;
  }

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
    setTimeout(type, 200);
  } else {
    let typingSpeed = 200;
    if (isDeleting) {
      typingSpeed /= 2;
    }
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, 1000);
});
