window.addEventListener("DOMContentLoaded", () => {

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let yesSize = 1;
let noCount = 0;

let noTexts = [
  "No? Really? 🥺",
  "Think again ❤️",
  "Wrong answer 😜",
  "Try again!",
  "YES is better 😍"
];


// 🎵 Start music when first interaction happens
function startMusicOnce(){
  music.play().catch(()=>{});
  document.removeEventListener("click", startMusicOnce);
}
document.addEventListener("click", startMusicOnce);


// ❌ NO CLICK → move + YES grows
noBtn.addEventListener("click", () => {

  // move no button
  let x = Math.random() * 200 - 100;
  let y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // grow yes button
  yesSize += 0.25;
  yesBtn.style.transform = `scale(${yesSize})`;

  message.innerHTML = noTexts[noCount % noTexts.length];
  noCount++;
});


// ✅ YES CLICK → DRAMATIC CELEBRATION
yesBtn.addEventListener("click", () => {

  document.querySelector(".buttons").style.display = "none";

  message.innerHTML = "YOU SAID YES!!! 💖✨";

  // infinite fireworks
  setInterval(() => {
    confetti({
      particleCount: 120,
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
