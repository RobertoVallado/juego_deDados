var n = Math.floor(Math.random()*6)+1;
var i = Math.floor(Math.random()*6)+1;

var randomDiceIMG1 = "dice" + n + ".png";
var randomDiceIMG2 = "dice" + i + ".png";
var randomSource1 = "images/" + randomDiceIMG1;
var randomSource2 = "images/" + randomDiceIMG2;
var randomSelect1 = document.querySelectorAll("img")[0];
var randomSelect2 = document.querySelectorAll("img")[1];

randomSelect1.setAttribute("src", randomSource1);
randomSelect2.setAttribute("src", randomSource2);

// var dado_1 = randomSource1[randomSource1.length -5];
// var dado_2 = randomSource2[randomSource2.length -5];
//
if (n > i) {
  document.querySelectorAll("p")[0].textContent = "Player 1 Wins!";
} else if ( n < i ) {
  document.querySelectorAll("p")[1].textContent = "Player 2 Wins!";
} else {
  document.querySelectorAll("p").textContent = "It's a Draw!";
}
