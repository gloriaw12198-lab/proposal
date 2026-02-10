const valentineForm = document.getElementById("valentineForm");
const nameInput = document.getElementById("nameInput");
const loveButtons = document.getElementById("loveButtons");

const yesBtn = document.getElementById("yesBtn");
const ofCourseBtn = document.getElementById("ofCourseBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const responseMessage = document.getElementById("responseMessage");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let heartsStarted = false;
let noHoverCount = 0;

// Music controls
musicBtn.addEventListener("click", () => {
  if(music.paused) {
    music.play();
    musicBtn.textContent = "Pause ⏸️";
  } else {
    music.pause();
    musicBtn.textContent = "Play 🎵";
  }
});

// Form submit
valentineForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  if(name){
    valentineForm.classList.add("hidden");
    loveButtons.classList.remove("hidden");
    responseMessage.textContent = `Hello ${name}, Thanks for saying yes cant wait to celebrate with you 💖✨`;
  }
});

// Typing effect for response
function typeMessage(text, element){
  element.textContent = "";
  let i=0;
  const interval = setInterval(()=>{
    element.textContent += text[i];
    i++;
    if(i>=text.length) clearInterval(interval);
  },50);
}

// Accept love
function acceptLove(){
  response.classList.remove("hidden");
  yesBtn.disabled = true;
  ofCourseBtn.disabled = true;
  noBtn.disabled = true;
  music.play().catch(()=>console.log("Music blocked until interaction"));
  if(!heartsStarted){ startHearts(); startConfetti(); heartsStarted=true;}
  typeMessage(responseMessage.textContent, responseMessage);
}

// Yes / Of Course click
yesBtn.addEventListener("click", acceptLove);
ofCourseBtn.addEventListener("click", acceptLove);

// No button prank
noBtn.addEventListener("mouseenter", ()=>{
  noHoverCount++;
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position="absolute";
  noBtn.style.left=`${x}px`;
  noBtn.style.top=`${y}px`;
  if(noHoverCount>3){
    // Duplicate itself
    const clone=noBtn.cloneNode(true);
    document.body.appendChild(clone);
    clone.addEventListener("mouseenter",()=>{ clone.style.left = Math.random()*window.innerWidth+'px'; clone.style.top = Math.random()*window.innerHeight+'px';});
  }
});

// Floating hearts
function startHearts(){
  setInterval(()=>{
    const heart=document.createElement("div");
    heart.classList.add("heart");
    const colors=["💖","💗","💓","💘"];
    heart.textContent = colors[Math.floor(Math.random()*colors.length)];
    heart.style.left = Math.random()*100+"vw";
    heart.style.fontSize = (Math.random()*20+20)+"px";
    heart.style.animationDuration = (Math.random()*3+3)+"s";
    // Easter egg: click for love quote
    heart.addEventListener("click", ()=>{
      alert(["You are amazing! 💌","Love is in the air! 💌","You make hearts flutter! 💌"][Math.floor(Math.random()*3)]);
    });
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  },300);
}

// Confetti
function startConfetti(){
  for(let i=0;i<100;i++){
    const conf=document.createElement("div");
    conf.textContent="🎉";
    conf.style.position="absolute";
    conf.style.fontSize=(Math.random()*20+10)+"px";
    conf.style.left=Math.random()*window.innerWidth+"px";
    conf.style.top=Math.random()*window.innerHeight+"px";
    conf.style.animation=`fall ${Math.random()*3+2}s linear forwards`;
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),5000);
  }
}

const style=document.createElement("style");
style.innerHTML=`@keyframes fall{0%{transform:translateY(0);}100%{transform:translateY(100vh) rotate(360deg);}}`;
document.head.appendChild(style);
