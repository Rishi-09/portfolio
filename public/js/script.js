const cards = document.getElementsByClassName("card"); 
const hoverSound = document.querySelector(".hoversound"); 
const form = document.getElementById("contact-form");

// Unlock audio
function unlockAudio() {
  hoverSound.play().then(() => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  }).catch(err => console.log("Autoplay blocked:", err));
}

document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
