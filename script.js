window.addEventListener("DOMContentLoaded", () => {

const intro = document.getElementById("intro");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const title = document.getElementById("main-title");
const visual = document.getElementById("visual-area");

let yesSize = 1;
let noCount = 0;

let noTexts = [
  "No? Really? 🥺",
  "Think again ❤️",
  "Wrong answer 😜",
  "Try again!",
  "YES is waiting 😍"
];


// ❤️ INTRO TAP → start everything
intro.addEventListener("click", () => {
  intro.style.opacity = "0";
  setTimeout(()=> intro.style.display = "none", 500);
  music.play().catch(()=>{});
});


// ❌ NO CLICK → move + YES grows
noBtn.addEventListener("click", () => {

  let x = Math.random() * 200 - 100;
  let y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesSize += 0.25;
  yesBtn.style.transform = `scale(${yesSize})`;

  message.innerHTML = noTexts[noCount % noTexts.length];
  noCount++;
});


// ✅ YES CLICK → MOVIE ENDING
yesBtn.addEventListener("click", () => {

  document.querySelector(".buttons").style.display = "none";
  message.innerHTML = "";
  title.innerHTML = "You made me the happiest person alive on this planet 💖";

  // 💏 Create fixed celebration gif
  const kissGif = document.createElement("img");
  kissGif.src = "https://media.tenor.com/bCfpwMjfAi0AAAAj/cute-love.gif";

  kissGif.style.position = "fixed";
  kissGif.style.left = "50%";
  kissGif.style.bottom = "30px";
  kissGif.style.transform = "translateX(-50%)";
  kissGif.style.width = "260px";
  kissGif.style.zIndex = "99999";

  document.body.appendChild(kissGif);

  // 🎆 fireworks forever
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
