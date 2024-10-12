// Wait for the document to be ready
$(document).ready(function() {

  // Transition effect for navbar and back-to-top icon
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 550) {
      $('.navbar').addClass('solid');
      $('.back-to-top').addClass('visible');
    } else {
      $('.navbar').removeClass('solid');
      $('.back-to-top').removeClass('visible');
    }
  });

  // Scrolling effect for Arrow icons
  $("#scrollIcon").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#about"), 1000);
  });

  $("#nav-about").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#about"), 1000);
  });

  $("#nav-portfolio").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#portfolio"), 1000);
  });

  $("#nav-contact").click(function(e) {
    e.preventDefault();
    $.scrollTo($("#contact"), 1000);
  });

  $(".navbar-brand").click(function(e) {
    e.preventDefault();
    $.scrollTo(0, 1000);
  });

});


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
    }, 600); // Delay of 600ms before starting the shuffle effect
});
