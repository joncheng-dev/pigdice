// Business Logic
function diceRoll() {
  return Math.floor((Math.random()*6) + 1);
}

function Player(name) {
  this.name = name;
  this.score = 0;
}  

function turn() {
  let temp = 0;
  let rollAgain = true;

  let result = diceRoll();
  temp = temp + result;
  console.log(temp);

  if (rollAgain === true) {
    let result = diceRoll();
    temp = temp + result;
    console.log(temp);
  }
}
 





// User Interface Logic





