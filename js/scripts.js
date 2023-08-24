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


function switchPlayers() {
  if (isHomerTurn === false)
  {
      isHomerTurn = true;
  } else if (isHomerTurn === true)
  { 
      isHomerTurn = false;
  }
  let roundScore = 0;
  let myResult = isHomerTurn;
  return myResult;
}

function rollLogic(roundScore) {
    let result = diceRoll();
    if (result === 1) {
      roundScore = 0;
      switchPlayers();
    } else {
      roundScore = roundScore + result;
      console.log(roundScore);
  return roundScore;
  }
}

// User Interface Logic
window.addEventListener("load", gameSetter);

// function displayTotalScore (p1, p2){
//   document.getElementById("player-1-score").innerText = p1.score;
//   document.getElementById("player-2-score").innerText = p2.score;
// }


function gameSetter() { 
  let playerOne = new Player("Homer");
  let playerTwo = new Player("Barney");
}

// function playerTurn() {
  
  let isHomerTurn = true;

  // something here for allowing you roll again.
  // update the score once you're done with your turn.
  
  if (playerNumber.score >= 100) {
    console.log("winner")
    // playerNumber is the winner
  } else {
    // switch players function
  }


  // let currentPlayer = "Homer";
  // switchPlayers(currentPlayer);
  
  // playerOne.switchPlayers();

  // Determine whose turn it is, so that when "roll again" button is clicked, it affects that player's roundPoints score.

  // document.getElementById("call-turn-function").addEventListener("click", p1Turn);


