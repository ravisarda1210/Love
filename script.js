window.addEventListener("DOMContentLoaded", () => {

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


// 🎵 Start music on first click anywhere
function startMusicOnce(){
  music.play().catch(()=>{});
  document.removeEventListener("click", startMusicOnce);
}
document.addEventListener("click", startMusicOnce);


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


// ✅ YES CLICK → DRAMATIC CELEBRATION
yesBtn.addEventListener("click", () => {

  document.querySelector(".buttons").style.display = "none";
  message.innerHTML = "";
  title.innerHTML = "You made me the happiest person alive on this planet 💖";

  // 💏 FORCE GIF ON SCREEN
  const kissGif = document.createElement("img");
  kissGif.src = "https://media.tenor.com/bCfpwMjfAi0AAAAj/cute-love.gif";

  kissGif.style.position = "fixed";
  kissGif.style.bottom = "20px";
  kissGif.style.left = "50%";
  kissGif.style.transform = "translateX(-50%)";
  kissGif.style.width = "260px";
  kissGif.style.zIndex = "9999";

  document.body.appendChild(kissGif);

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
