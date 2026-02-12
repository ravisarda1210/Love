window.addEventListener("DOMContentLoaded", () => {

const intro = document.getElementById("intro");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const title = document.getElementById("main-title");
const celebration = document.getElementById("celebration");

let yesSize = 1;
let noCount = 0;

let noTexts = [
  "No? Really? 🥺",
  "Think again ❤️",
  "Wrong answer 😜",
  "Try again!",
  "YES is waiting 😍"
];


// intro tap
intro.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(()=> intro.style.display = "none", 500);
  music.play().catch(()=>{});
});


// 😈 escape but avoid YES
function escapeNo(){

  const margin = 20;

  const yesRect = yesBtn.getBoundingClientRect();

  let x, y;
  let tries = 0;

  do {
    const maxX = window.innerWidth - noBtn.offsetWidth - margin;
    const maxY = window.innerHeight - noBtn.offsetHeight - margin;

    x = Math.random() * maxX;
    y = Math.random() * maxY;

    tries++;

  } while (
    x > yesRect.left - 80 &&
    x < yesRect.right + 80 &&
    y > yesRect.top - 80 &&
    y < yesRect.bottom + 80 &&
    tries < 50
  );

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  yesSize += 0.25;
  yesBtn.style.transform = `scale(${yesSize})`;

  message.innerHTML = noTexts[noCount % noTexts.length];
  noCount++;
}

noBtn.addEventListener("mouseover", escapeNo);
noBtn.addEventListener("touchstart", escapeNo);


// ❤️ YES
yesBtn.addEventListener("click", () => {

  document.querySelector(".buttons").style.display = "none";
  message.innerHTML = "";
  title.innerHTML = "You made me the happiest person alive on this planet 💖";

  // GIF
  const gif = document.createElement("img");
  gif.src = "https://media.tenor.com/bCfpwMjfAi0AAAAj/cute-love.gif";
  celebration.appendChild(gif);

  // final line
  const text = document.createElement("div");
  text.className = "final";
  text.innerHTML = "I LOVE YOU ❤️<br>Always yours";
  celebration.appendChild(text);

  // restart icon
  const restart = document.createElement("div");
  restart.innerHTML = "🔄";
  restart.style.fontSize = "22px";
  restart.style.marginTop = "8px";
  restart.style.cursor = "pointer";
  restart.onclick = () => location.reload();
  celebration.appendChild(restart);

  // fireworks
  setInterval(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 700);

});


// music toggle
musicBtn.addEventListener("click",()=>{
  if(music.paused) music.play();
  else music.pause();
});

});
