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

// Hover sound
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

// Contact form
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const text = await res.text();
    alert(text);
  } catch (err) {
    alert("⚠️ Failed to send message");
    console.error(err);
  }
});
