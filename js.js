const words = [
"Quick Delivery ",
"Certified  Products",
"Transparent Pricing",
"Professional Installation",


];

let wordIndex = 0;
let letterIndex = 0;
const spanElement = document.querySelector(".text-animation span");

function typeText() {
  if (letterIndex < words[wordIndex].length) {
    spanElement.textContent += words[wordIndex][letterIndex];
    letterIndex++;
    setTimeout(typeText, 150); // Typing speed
  } else {
    setTimeout(eraseText, 2000); // Pause before erasing
  }
}

function eraseText() {
  if (letterIndex > 0) {
    spanElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(eraseText, 100); // Erasing speed
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeText, 500); // Pause before next word
  }
}

typeText();

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});



  let lastScroll = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      // scrolling down → hide menu
      header.classList.add('hide');
    } else {
      // scrolling up → show menu
      header.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });

