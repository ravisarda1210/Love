const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const title = document.getElementById("title");

// 😈 evil messages
const texts = [
  "Are you sure? 😏",
  "Think again... 🙈",
  "Last chance! ❤️",
  "You can't escape 😈",
  "Say YES already 💕"
];

let index = 0;

// ❌ NO button moves but stays on screen
noBtn.addEventListener("click", () => {
  message.innerHTML = texts[index % texts.length];
  index++;

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});


// ❤️ YES
yesBtn.addEventListener("click", () => {

  title.innerHTML = "You made me the happiest person alive 💖";
  message.innerHTML = "";

  document.querySelector(".buttons").style.display = "none";

  // ❤️ final text
  const text = document.createElement("div");
  text.innerHTML = "I LOVE YOU ❤️<br>Always yours";
  text.className = "finalText";
  document.body.appendChild(text);

  // 🔄 restart
  const restart = document.createElement("div");
  restart.innerHTML = "🔄";
  restart.className = "restart";
  restart.onclick = () => location.reload();
  document.body.appendChild(restart);

  // 🎆 fireworks
  setInterval(() => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 700);
});
