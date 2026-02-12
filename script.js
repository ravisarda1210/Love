window.addEventListener("DOMContentLoaded", () => {

const intro = document.getElementById("intro");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const title = document.getElementById("main-title");

let yesSize = 1;
let noCount = 0;

let noTexts = [
  "No? Really? 🥺",
  "Think again ❤️",
  "Wrong answer 😜",
  "Try again!",
  "YES is waiting 😍"
];


// ❤️ intro click
intro.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(()=> intro.style.display = "none", 500);
  music.play().catch(()=>{});
});


// 😈 NO escapes (mobile friendly)
function escapeNo(){

  const margin = 10;

  const maxX = window.innerWidth - noBtn.offsetWidth - margin;
  const maxY = window.innerHeight - noBtn.offsetHeight - margin;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

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


// ✅ YES → celebration
yesBtn.addEventListener("click", () => {

  document.querySelector(".buttons").style.display = "none";
  message.innerHTML = "";
  title.innerHTML = "You made me the happiest person alive on this planet 💖";

  // 💏 GIF guaranteed
  const kissGif = document.createElement("img");
  kissGif.src = "https://media.tenor.com/bCfpwMjfAi0AAAAj/cute-love.gif";
  kissGif.style.position = "fixed";
  kissGif.style.left = "50%";
  kissGif.style.bottom = "120px";
  kissGif.style.transform = "translateX(-50%)";
  kissGif.style.width = "240px";
  kissGif.style.zIndex = "9999";
  document.body.appendChild(kissGif);

  // ❤️ final text
  const finalMsg = document.createElement("div");
  finalMsg.innerHTML = "I LOVE YOU ❤️<br>Always yours<br>Ravss";
  finalMsg.style.position = "fixed";
  finalMsg.style.bottom = "40px";
  finalMsg.style.left = "50%";
  finalMsg.style.transform = "translateX(-50%)";
  finalMsg.style.fontSize = "22px";
  finalMsg.style.fontWeight = "900";
  finalMsg.style.textAlign = "center";
  finalMsg.style.color = "#c9184a";
  finalMsg.style.zIndex = "9999";
  document.body.appendChild(finalMsg);

  // 🎆 fireworks
  setInterval(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 700);

});


// 🔊 music toggle
musicBtn.addEventListener("click",()=>{
  if(music.paused) music.play();
  else music.pause();
});

});
