const button = document.getElementById("yesBtn");
const response = document.getElementById("response");

button.addEventListener("click", () => {
  response.classList.remove("hidden");
  button.innerText = "You're officially my Galentine 💕";
  button.disabled = true;
});
