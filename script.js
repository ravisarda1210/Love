window.addEventListener("DOMContentLoaded", () => {

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const title = document.querySelector("h1");

let yesSize = 1;
let noCount = 0;

let noTexts = [
  "No? Really? 🥺",
  "Think again ❤️",
  "Wrong answer 😜",
  "Try again!",
  "YES is waiting 😍"
];


// 🎵 start music on first interaction
function startMusicOnce(){
  music.play().catch(()=>{});
  document.removeEventListener("click", startMusicOnce);
}
document.addEventListener("click", startMusicOnce);


// ❌ NO → move + YES grows
noBtn.addEventListener("click", () => {
  let x = Math.random() * 200 - 100;
  let y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesSize += 0.25;
  yesBtn.style.transform = `scale(${yesSize})`;

  message.innerHTML = noTexts[noCount % noTexts.length];
  noCount++;
});


// ✅ YES → MOVIE CLIMAX
yesBtn.addEventListener("click", () => {

  document.querySelector(".buttons").style.display = "none";

  title.innerHTML = "You made me the happiest person alive on this planet 💖";

  message.innerHTML = "";

  // show cartoon love gif
  const gif = document.createElement("img");
  gif.src = "https://media.tenor.com/bCfpwMjfAi0AAAAj/cute-love.gif";
  gif.style.width = "220px";
  gif.style.marginTop = "20px";
  document.querySelector(".container").appendChild(gif);

  // fireworks forever
  setInterval(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 700);


  // after 3 sec → show memory
  setTimeout(() => {
    gif.remove();

    const memory = document.createElement("img");
    memory.src = "images/memory.jpg";
    memory.style.width = "260px";
    memory.style.maxWidth = "85%";
    memory.style.borderRadius = "15px";
    memory.style.marginTop = "20px";
    memory.style.boxShadow = "0 0 20px rgba(255,255,255,0.8)";

    document.querySelector(".container").appendChild(memory);
  }, 3000);

});


// 🔊 music button
musicBtn.addEventListener("click",()=>{
  if(music.paused) music.play();
  else music.pause();
});

});
