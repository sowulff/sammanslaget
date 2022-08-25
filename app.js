const button = document.getElementById("button");
const game = document.getElementById("game");
const start = document.getElementById("start");
const about = document.getElementById("about");
const box = document.getElementById("box");

function startGame() {
  start.style.display = "none";
  about.style.display = "none";
  game.style.display = "block";
}

function stopGame() {
  start.style.display = "block";
  about.style.display = "block";
  game.style.display = "none";
  start.scrollIntoView();
}
