const button = document.querySelectorAll(".start-button");
const game = document.getElementById("game");
const start = document.getElementById("start");
const about = document.getElementById("about");
//sections

function startGame() {
  //   start.style.display = "none";
  game.style.display = "block";
  about.scrollIntoView();
}
