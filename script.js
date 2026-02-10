// Music control
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "Pause 🎵";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "Play 🎵";
  }
});

// Form submission
const valentineForm = document.getElementById("valentineForm");
const loveButtons = document.getElementById("loveButtons");
const nameInput = document.getElementById("nameInput");

valentineForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loveButtons.classList.remove("hidden");
  valentineForm.classList.add("hidden");
});

// Response section
const yesBtn = document.getElementById("yesBtn");
const ofCourseBtn = document.getElementById("ofCourseBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const responseMessage = document.getElementById("responseMessage");

function showResponse(message) {
  response.classList.remove("hidden");
  responseMessage.textContent = message;
  loveButtons.classList.add("hidden");
  createHearts();
}

// Create floating hearts
function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

yesBtn.addEventListener("click", () => {
  showResponse(`Aww! 🥰 ${nameInput.value}, you just made my heart sparkle! 💖✨ Can’t wait for sweet moments with you! 🌸`);
});

ofCourseBtn.addEventListener("click", () => {
  showResponse(`Yay! 💕 ${nameInput.value}, you just made my day magical! 💫 Let's fill it with smiles, hugs, and laughter!  Cant wait to celebrate with you and make memmories😘`);
});

noBtn.addEventListener("click", () => {
  showResponse(`Oh no! 😅 It's okay, ${nameInput.value}. Guess i will try next year 💌🍫… Just know you're still amazing! 🌷💖`);
});
