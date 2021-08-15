// roll the dice; get a random number 1-6
function roll(){
  return Math.floor(Math.random()*6 + 1);
}

// Display dice images based on roll outcome
function displayDiceImg(diceNum, result) {
  document.querySelector(".img" + diceNum).setAttribute("src", "images/dice" + result + ".png")
}

// Calculate and show result
function displayResult(dice1, dice2) {
  if (dice1 > dice2){
    document.querySelector(".result").textContent = "🚩 Player 1 Wins!"
  }
  else if (dice2 > dice1){
    document.querySelector(".result").textContent = "Player 2 Wins! 🚩"
  }
  else{
    document.querySelector(".result").textContent = "Draw!"
  }
}

// main function
function main() {
  var dice1 = roll();
  var dice2 = roll();

  displayDiceImg(1, dice1);
  displayDiceImg(2, dice2);
  
  displayResult(dice1, dice2);
}

main();
