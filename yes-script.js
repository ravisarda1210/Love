const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let noTexts = [
  "Are you sure? 🥺",
  "Think again! ❤️",
  "I will keep asking 😜",
  "You can’t say no!",
  "Try pressing YES 😍"
];

let count = 0;

yesBtn.addEventListener("click", () => {
  music.play().catch(()=>{});
  confetti({ particleCount: 200, spread: 70 });
  message.innerHTML = "You just made me the happiest person alive! 💖";
});

noBtn.addEventListener("mouseover", () => {
  let x = Math.random() * 200 - 100;
  let y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
  message.innerHTML = noTexts[count % noTexts.length];
  count++;
});

musicBtn.addEventListener("click",()=>{
  if(music.paused) music.play();
  else music.pause();
});

