var ran1 = Math.random();
var n1 = Math.floor(ran1 * 6) + 1;
var ran2 = Math.random();
var n2 = Math.floor(ran2 * 6) + 1;
WhoWon(n1, n2);

function WhoWon(n1, n2) {
  if (n1 > n2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
  } else if (n1 < n2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
switch (n1) {

  case 1:
    document.querySelector(".img1").src = "images/dice1.png";
    break;

  case 2:
    document.querySelector(".img1").src = "images/dice2.png";
    break;

  case 3:
    document.querySelector(".img1").src = "images/dice3.png";
    break;

  case 4:
    document.querySelector(".img1").src = "images/dice4.png";
    break;

  case 5:
    document.querySelector(".img1").src = "images/dice5.png";
    break;

  default:
    document.querySelector(".img1").src = "images/dice6.png";
    break;


}
switch (n2) {

  case 1:
    document.querySelector(".img2").src = "images/dice1.png";
    break;

  case 2:
    document.querySelector(".img2").src = "images/dice2.png";
    break;

  case 3:
    document.querySelector(".img2").src = "images/dice3.png";
    break;

  case 4:
    document.querySelector(".img2").src = "images/dice4.png";
    break;

  case 5:
    document.querySelector(".img2").src = "images/dice5.png";
    break;

  default:
    document.querySelector(".img2").src = "images/dice6.png";
    break;


}
