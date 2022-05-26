const typedTextSpan = document.querySelector(".typed-text");

const textArray = "peki tum duzene meydan okuyup neslimize gercek aski gostermeye var misin ç";
const typingDelay = 200;
let charIndex = 0;

function type() {
  if (charIndex < textArray.length) {
    typedTextSpan.textContent += textArray.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  setTimeout(type, 2250);
});