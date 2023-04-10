// Set Variables
const weapons = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;
let playerChoice;
let computerChoice;
let rule;

// DOM Elements
let computerMsg = document.querySelector(".computer-msg");
let message = document.querySelector(".message.container");
let ready = document.querySelector("#readyButton");
let buttonContainer = document.querySelector(".button.container");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

document.querySelector("#computerScore").innerHTML = `Computer Score: ${computerScore}`;
document.querySelector("#playerScore").innerHTML = `Player Score: ${playerScore}`;

// Functions
function computerPick() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

function updateScreen(newPick) {
  document.querySelector("#computerScore").innerHTML = `Computer Score: ${computerScore}`;
  document.querySelector("#playerScore").innerHTML = `Player Score: ${playerScore}`; // Update Score

  // Update new computer pick
  computerMsg.innerHTML = `I will choose ${newPick}. :)`;
}

function showRules(ruleNumber) {
  switch (rule) {
    case 1:
      message.innerHTML = `PAPER BEATS ROCK <br> ROCK BEATS SCISSORS <br>  SCISSORS BEATS PAPER`; // Standard Rules
      break;

    default:
      console.log("Something is wrong...");
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  console.log(`Rule Number: ${rule}`);

  console.log(`Player: ${playerChoice}`);
  console.log(`Computer: ${computerChoice}`);

  if (rule == 1) {
    if (playerChoice == computerChoice) {
      console.log("Tie");
    } else if (
      (playerChoice == "Rock" && computerChoice == "Scissors") ||
      (playerChoice == "Scissors" && computerChoice == "Paper") ||
      (playerChoice == "Paper" && computerChoice == "Rock")
    ) {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  }
}

// Game Proper
buttonContainer.style.visibility = "hidden"; // Hides player buttons by default

// Initial Round Prep
ready.addEventListener("click", () => {
  ready.style.visibility = "hidden";
  buttonContainer.style.visibility = "visible";

  // Initial Rules
  rule = 1;
  showRules(rule);

  // Computer Picks for Initial Round
  computerChoice = computerPick();
  computerMsg.innerHTML = `I will choose ${computerChoice}.`;

  // End Initial Round Prep

  // Player Picks and Start Game
  rockButton.addEventListener("click", () => {
    playerChoice = "Rock";
    playRound(playerChoice, computerChoice);

    // End Round
    computerChoice = computerPick();
    updateScreen(computerChoice);
  });

  paperButton.addEventListener("click", () => {
    playerChoice = "Paper";
    playRound(playerChoice, computerChoice);

    // End Round
    computerChoice = computerPick();
    updateScreen(computerChoice);
  });

  scissorsButton.addEventListener("click", () => {
    playerChoice = "Scissors";
    playRound(playerChoice, computerChoice);

    // End Round
    computerChoice = computerPick();
    updateScreen(computerChoice);
  });
});
