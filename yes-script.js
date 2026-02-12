
function startSurprise(){
  document.getElementById("startScreen").style.display="none";
  document.getElementById("mainContent").style.display="block";

  const music=document.getElementById("bg-music");
  music.play().catch(()=>{});

  confetti({
    particleCount:150,
    spread:70,
    origin:{y:0.6}
  });
}

function toggleMusic(){
  const music=document.getElementById("bg-music");
  if(music.paused){
    music.play();
  }else{
    music.pause();
  }
}
