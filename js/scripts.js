// Business Logic
function diceRoll() {
  return Math.floor((Math.random()*6) + 1);
}

function Player(name) {
  this.name = name;
  this.score = 0;
}  

Player.prototype.updateScore = function (roundScore) {
  this.score += roundScore;
}

function turn() {
  let temp = 0;
  let rollAgain = true;

  while (rollAgain === true) {
    let result = diceRoll();
    if (result === 1) {
      temp = 0;
      console.log(temp);
      rollAgain = false;
    } else {
      temp = temp + result;
      console.log(temp);
    }
  }
}
 





// User Interface Logic





