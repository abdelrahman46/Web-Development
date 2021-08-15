// Game variables
var gameStatus = 0 // default is 0, in-game is 1, gameover is -1
var level = 0; // current level
var buttons = ["green", "red", "yellow", "blue"]; // game buttons
var pattern = []; // sequence given
var moveNum = 0; // number of moves made in level
var playerPattern = []; // sequence entered by user

// keydown listener to start or restard a game

$(document).keydown(function() {
  if (gameStatus === 0 || gameStatus === -1) {
    nextLevel();
  }
});

// click listener to take move input from player

$(".btn").click(function() {
  var buttonClicked = this.getAttribute("id");
  playSound(buttonClicked);
  makeMove(buttonClicked);
  processMove();
});

// Plays sound

function playSound(fileName) {
  var audio = new Audio('sounds/' + fileName + '.mp3');
  audio.play();
}


// Initiates and runs next level

function nextLevel() {
  gameStatus = 1;
  moveNum = 0;
  playerPattern = [];
  level++;
  var random = Math.floor(Math.random() * 4) // generates numbers 0-3 randomly
  pattern.push(buttons[random]); // add next button to sequence
  indicateNextButton();
  $("#level-title").text("Level " + level);
}

// indicate next button in sequence

function indicateNextButton() {
  playSound(pattern[pattern.length - 1]);
  $("#" + pattern[pattern.length - 1]).fadeOut(100).fadeIn(100);
}

// record player's move

function makeMove(move) {
  moveNum++;
  playerPattern.push(move);
}


// process player's move

function processMove() {
  if (playerPattern[moveNum - 1] === pattern[moveNum - 1]) {
    if (playerPattern.length === pattern.length) {
      setTimeout(function() {
        nextLevel();
      }, 800);
    }
  } else {
    gameOver();
  }
}

// when player loses

function gameOver() {
  gameStatus = -1;
  playSound("wrong");
  $("body").addClass("game-over");
  $("#level-title").text("Game Over, Press Any Key to Restart");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 100);
  reset();
}

// to reset the game's variables and start new game

function reset() {
  gameStatus = 0;
  level = 0;
  pattern = [];
  moveNum = 0;
  playerPattern = [];
}
