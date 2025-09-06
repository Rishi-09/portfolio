const cards = document.getElementsByClassName("card"); 
const hoverSound = document.querySelector(".hoversound"); 


function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }

for (let card of cards) {
  card.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0; 
    hoverSound.play();
  });

  card.addEventListener("mouseleave", () => {
    hoverSound.pause();        
    hoverSound.currentTime = 0; 
  });
}
