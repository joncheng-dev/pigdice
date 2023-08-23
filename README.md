Co-authored-by: Ian Bravo <bravo.ian@gmail.com>

Co-authored-by: Jonathan Cheng <joncheng.dev@gmail.com>"




# _{Application Name}_

#### By _**{List of contributors}**_

#### _{Brief description of application}_

## Tests

```javascript
Describe: diceRoll()

Test 1: "It should return a random number between 1 and 6."
Code: diceRoll()
Expected Output: 1-6


Describe: Player() constructor function

Test 2: "This will add a player and initialize score to 0"
Code: 
let playerOne = new Player("Paul");
playerOne;
Expected Output: Player: {name: "Paul", score:0}


Describe: turn()

Test 3: "This will call the diceRoll function, and save the value into a temp variable."
Code: 
turn();
console.log(temp);
Expected Output: 1

Test 4: "This will call the diceRoll function a second time and increment the temp variable"
Code: 
turn();
Expected Output: 1-6, 1-6

Test 5: "This will end the turn diceRoll function when a 1 is rolled"
Code:
turn();
Expected Output: 0

Test 6: This will run the turn function until a 1 is rolled
Code: turn();
Expected Output: lots of numbers until a 1 is rolled then it will console.log a 0.


Describe: Player.prototype.updateScore 

Test 7: "It should add the player's round score to the total score."
Code: 
let firstPlayer = new Player("Jon");
let roundScore = 25;
firstPlayer.updateScore(roundScore);
firstPlayer;
Expected Output: 
{name: "Jon", score: 25;}
```

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_




<!-- Brainstorming -->
```


We need:
A function that rolls a die.

Initializes a temp score
let temp = 0;

If roll is 1, temp score is set to 0.
And turn is over.

If roll is 2-6, add to the temp score.
(player can click roll to keep rolling)
(player can click end turn to add temp to player score)

Change to next player.

click -> person clicks button to roll
click -> person clicks end turn to save score to object

function tempScoreTracker() {

}

function roll() {
  let temp = 0
}

```