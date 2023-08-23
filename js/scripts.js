// Business Logic
function diceRoll() {
  return Math.floor((Math.random()*6) + 1);
}

function Player(name) {
  this.name = name;
  this.score = 0;
}  




// User Interface Logic

// A function that rolls a die.

// Initializes a temp score
// let temp = 0;

// If roll is 1, temp score is set to 0.
// And turn is over.

// If roll is 2-6, add to the temp score.
// (player can click roll to keep rolling)
// (player can click end turn to add temp to player score)

// Change to next player.

// click -> person clicks button to roll
// click -> person clicks end turn to save score to object



function turn() {
  let temp = 0;
  
  
  let result = diceRoll();
  if (result === 1) {
    //end turn and flip to next player
  } else {
    temp = temp += result;
    //player decides to keep going UI
    //player clicks a button, which triggers diceRoll
  }
}