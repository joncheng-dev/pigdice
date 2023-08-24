// Business Logic
function diceRoll() {
  return Math.floor((Math.random()*6) + 1);
}

function Player(name) {
  this.name = name;
  this.score = 0;
}  

Player.prototype.updateScore = function (roundScore) {
  this.score = this.score + roundScore;
}

//Player.prototype.switchPlayers = function () {
  //needs start and end
  //for start, assign to Homer
  //for end, it will mean that you hit the button or get roll a 1
//}

function switchPlayers(currentPlayer) {
  if (currentPlayer === "Homer")
  {
      currentPlayer = "Barney";
  } else if (currentPlayer === "Barney")
  { 
      currentPlayer = "Homer";
  }
  return currentPlayer;
}


function rollLogic(roundPoints) {
    let result = diceRoll();

    if (result === 1) {
      roundPoints = 0;
      // switchPlayers();
    } else {
      roundPoints = roundPoints + result;
      console.log(roundPoints);
    }
  return roundPoints;
}

// User Interface Logic
window.addEventListener("load", gameSetter);

function displayTotalScore (p1, p2){
  document.getElementById("player-1-score").innerText = p1.score;
  document.getElementById("player-2-score").innerText = p2.score;
}


function playerTurn(playerNumber) {
  let roundPoints = 0;
  let currentPoints = rollLogic(roundPoints);
  // something here for allowing you roll again.
  // update the score once you're done with your turn.
  playerNumber.updateScore();
  if (playerNumber.score >= 100) {
    // playerNumber is the winner
  } else {
    // switch players function
  }
}

function gameSetter() { 
  let playerOne = new Player("Homer");
  let playerTwo = new Player("Barney");
  displayTotalScore(playerOne, playerTwo);

  let currentPlayer = "Homer";
  switchPlayers(currentPlayer);

  // Determine whose turn it is, so that when "roll again" button is clicked, it affects that player's roundPoints score.

  document.getElementById("call-turn-function").addEventListener("click", p1Turn);

}
