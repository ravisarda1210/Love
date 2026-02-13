const intro = document.getElementById("intro");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");
const noSound = document.getElementById("noSound");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const tease = document.getElementById("tease");
const title = document.getElementById("title");
const gif = document.getElementById("cat-gif");


// SAFE GIF LINKS (stable)
const normalGif = "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif";
const cryGif = "https://tenor.com/view/puso-heart-pusong-sugatan-biyak-broken-heart-gif-10313340180720529387.gif";
// const cryGif = "https://media1.tenor.com/m/97Zio3BdYvQAAAAC/fluent-emoji.gif";
// const cryGif = "https://tenor.com/view/fluent-emoji-microsoft-sad-guilty-gif-17849562627233899252.gif";
// const loveGif = "https://media1.tenor.com/m/FBdUdiVOa2oAAAAC/love.gif";
// const loveGif = "https://tenor.com/view/love-gif-1447718671631674218.gif";
const loveGif = "https://media1.tenor.com/m/5GVsInsrd_YAAAAC/love-you-emojis.gif";
// const cryGif = "https://media.tenor.com/x8v1oNUOmg4AAAAC/crying-cat-cat.gif";
// const loveGif = "https://media.tenor.com/joYxwXh2Eb8AAAAi/love.gif";

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


// ❤️ intro
intro.addEventListener("click", () => {
  music.play();
  intro.style.display = "none";
  main.style.display = "block";
  gif.src = normalGif;
});


// ❌ NO click
noBtn.addEventListener("click", () => {

  if(navigator.vibrate) navigator.vibrate(120);

  noSound.currentTime = 0;
  noSound.play();

  tease.innerHTML = lines[i % lines.length];
  i++;

  yesSize += 0.15;
  yesBtn.style.transform = `scale(${yesSize})`;

  // after 10 → crying
  if(i >= 10){
    gif.src = cryGif + "?v=" + new Date().getTime();  // force refresh
  }

  // move button
  const container = document.querySelector(".buttons");
  const margin = 10;

  const maxX = container.clientWidth - noBtn.offsetWidth - margin;
  const maxY = container.clientHeight - noBtn.offsetHeight - margin;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});


// ❤️ YES click
yesBtn.addEventListener("click", () => {

  tease.style.display = "none";
  document.querySelector(".buttons").style.display = "none";

  title.innerHTML = "You made me the happiest person alive 💖";

  // change to love gif
  gif.src = loveGif + "?v=" + new Date().getTime();

  // show names
  const love = document.createElement("div");
  love.style.marginTop = "15px";
  love.style.fontSize = "22px";
  love.style.fontWeight = "bold";
  love.innerHTML = "RAVSS ❤️ ANKITA";
  document.body.appendChild(love);

  // hearts
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


// if ANY gif fails → keep normal one
gif.onerror = () => {
  gif.src = normalGif;
};


