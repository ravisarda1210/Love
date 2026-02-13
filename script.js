const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");
const noSound = document.getElementById("noSound");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const tease = document.getElementById("tease");
const title = document.getElementById("title");
const gif = document.getElementById("cat-gif");

const lines = [
  "No? Really? 🥺",
  "Think again ❤️",
  "Wrong answer 😜",
  "I am getting emotional 😭",
  "Pleaseeee 🥹",
  "Don’t do this to me 💔",
  "Last chance 😣",
  "You are very stubborn 😤",
  "My heart can't take it 💘",
  "Fine… I will cry now 😭"
];

let i = 0;
let yesSize = 1;

// intro click
intro.addEventListener("click", () => {
  music.play();
  intro.style.display = "none";
  main.style.display = "block";
});

// NO click
noBtn.addEventListener("click", () => {

  if(navigator.vibrate) navigator.vibrate(120);

  noSound.currentTime = 0;
  noSound.play();

  tease.innerHTML = lines[i % lines.length];
  i++;

  yesSize += 0.15;
  yesBtn.style.transform = `scale(${yesSize})`;

  // crying gif
  if(i >= 10){
    gif.src = "https://media.tenor.com/tzvzrzS1o7sAAAAi/crying-cat.gif";
  }

  // move within container
  const container = document.querySelector(".buttons");
  const margin = 10;

  const maxX = container.clientWidth - noBtn.offsetWidth - margin;
  const maxY = container.clientHeight - noBtn.offsetHeight - margin;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// YES click
yesBtn.addEventListener("click", () => {

  tease.style.display = "none";
  document.querySelector(".buttons").style.display = "none";

  title.innerHTML = "You made me the happiest person alive 💖";

  // happy gif
  gif.src = "https://media.tenor.com/joYxwXh2Eb8AAAAi/love.gif";

  // show names
  const love = document.createElement("div");
  love.style.marginTop = "15px";
  love.style.fontSize = "22px";
  love.style.fontWeight = "bold";
  love.innerHTML = "RAVSS ❤️ ANKITA";
  document.body.appendChild(love);

  // floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
});
