const cards = document.getElementsByClassName("card"); 
const hoverSound = document.querySelector(".hoversound"); 
const send = document.getElementById('sendbtn');

// Unlock audio once after first interaction
function unlockAudio() {
  hoverSound.play().then(() => {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  }).catch(err => {
    console.log("Autoplay blocked:", err);
  });
}

// Add listener for first interaction
document.addEventListener("click", unlockAudio);
document.addEventListener("keydown", unlockAudio);

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Hover sound effect
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
//Contact-send
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault(); // ✅ stop redirect

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("http://localhost:3000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      alert("✅ Message sent!");
      e.target.reset();
    } else {
      alert("❌ Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Could not connect to server.");
  }
});