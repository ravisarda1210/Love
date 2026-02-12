const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const tease = document.getElementById("tease");
const title = document.getElementById("title");

// teasing lines
const lines = [
  "No? Really? 🥺",
  "Think again ❤️",
  "Wrong answer 😜",
  "Try again!",
  "YES is waiting 😍"
];

let i = 0;
let yesSize = 1;


// ❤️ intro click
intro.addEventListener("click", () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");
  music.play();
});


// ❌ NO button movement
noBtn.addEventListener("click", () => {

  tease.innerHTML = lines[i % lines.length];
  i++;

  yesSize += 0.15;
  yesBtn.style.transform = `scale(${yesSize})`;

  // move but stay visible & avoid yes
  const maxX = window.innerWidth - noBtn.offsetWidth - 10;
  const maxY = window.innerHeight - noBtn.offsetHeight - 10;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});


// ❤️ YES clicked
yesBtn.addEventListener("click", () => {

  tease.innerHTML = "";
  document.querySelector(".buttons").style.display = "none";

  title.className = "topFinal";
  title.innerHTML = "You made me the happiest person alive on this planet 💖";

  const bottom = document.createElement("div");
  bottom.className = "bottomFinal";
  bottom.innerHTML = "I LOVE YOU ❤️<br>Always yours Ravss";
  document.body.appendChild(bottom);

  // fireworks
  setInterval(() => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  }, 700);
});
