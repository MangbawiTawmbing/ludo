var n = Math.random();
n = n*6;
var randomNumber1 = Math.floor((n) + 1);

var randomImage1 = "dice" + randomNumber1 + ".png";
var imageSource1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "images/dice" + randomNumber2  + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player1 WINNER!";
} else if (randomNumber2  >randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 WINNER!";
} else {document.querySelector("h1").innerHTML = "DRAW! Play again.";
}
