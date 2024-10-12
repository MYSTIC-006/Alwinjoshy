const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let interval = null;

function shuffleText(element) {
  const originalText = element.dataset.value;
  const textLength = originalText.length;
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return originalText[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");

    if (iteration >= textLength) {
      clearInterval(interval);
      element.innerText = originalText; // Ensure the final text is the original text
    }

    iteration += 1 / textLength; // Adjust the speed of the shuffle
  }, 40); // Adjust the interval time to make the shuffle slower
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll(".shuffle-text").forEach(shuffleText);
  }, 600); // Delay of 1500ms before starting the shuffle effect
});

