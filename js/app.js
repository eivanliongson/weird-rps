// Set Variables
const weapons = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;
let round = 1;
let numOfTies = 0;
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
document.querySelector("#round").innerHTML = `Round: ${round}`;
document.querySelector("#ties").innerHTML = `Ties: ${numOfTies}`


// Functions
function computerPick() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

function updateScreen(newPick) {
  document.querySelector("#computerScore").innerHTML = `Computer Score: ${computerScore}`;
  document.querySelector("#playerScore").innerHTML = `Player Score: ${playerScore}`; // Update Score
  document.querySelector("#round").innerHTML = `Round: ${round}`;
  document.querySelector("#ties").innerHTML = `Ties: ${numOfTies}`

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

function playRound(p, c) {
  console.log(`Rule Number: ${rule}`);
  console.log(`Player: ${p}`);
  console.log(`Computer: ${c}`);

  if (rule == 1) {
    if (p == c) {
      console.log("Tie");
      numOfTies += 1;
    } else if (
      (p == "Rock" && c == "Scissors") ||
      (p == "Scissors" && c == "Paper") ||
      (p == "Paper" && c == "Rock")
    ) {
      playerScore += 1;
    } else {
      computerScore += 1;
    }
  }

  // Round End
  round += 1;
  computerChoice = computerPick();
  updateScreen(computerChoice);
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
    
  });

  paperButton.addEventListener("click", () => {
    playerChoice = "Paper";
    playRound(playerChoice, computerChoice);
  });

  scissorsButton.addEventListener("click", () => {
    playerChoice = "Scissors";
    playRound(playerChoice, computerChoice);
  });
});
