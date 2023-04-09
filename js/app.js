// Set Variables
const weapons = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;

let rules = 1;

// DOM Elements
let computerMsg = document.querySelector(".computer-msg");
let message = document.querySelector(".message.container");
let ready = document.querySelector("#readyButton");
let buttons = document.querySelectorAll(".buttons");
let buttonContainer = document.querySelector(".button.container");

// Functions
function computerPick() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

// Game Proper
buttonContainer.style.visibility = "hidden"; // Hides player buttons by default
document.querySelector("#computerScore").innerHTML = `Computer Score ${computerScore}`;

// Game Start
ready.addEventListener("click", () => {
  ready.style.visibility = "hidden";
  buttonContainer.style.visibility = "visible";

  switch (rules) {
    case 1:
      message.innerHTML = `PAPER BEATS ROCK \n ROCK BEATS SCISSORS \n  SCISSORS BEATS PAPER`; // Standard Rules
      break;

    case 2:
      message.innerHTML = `BLA`;

    default:
      break;
  }

  // Computer Picks
  
  let computerChoice = computerPick().toUpperCase();
  computerMsg.innerHTML = computerChoice;
  console.log(computerChoice);

  // Show player buttons - Player Pick
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      
      // Game Logic

      let playerChoice = button.id.toUpperCase();
      console.log(playerChoice);

      if (rules == 1) {
        if (playerChoice == computerChoice) {
          console.log("Tie");
        }
      }
      

      // Game End
      ready.style.visibility = "visible";
      buttonContainer.style.visibility = "hidden";
      message.innerHTML = "";
      computerMsg.innerHTML = "";
    });
  });
});
