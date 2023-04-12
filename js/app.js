// Set Variables
const weapons = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let sheldonScore = 0;
let playerScore = 0;
let round = 1;
let numOfTies = 0;
let playerChoice;
let sheldonChoice;
let rule;

// DOM Elements
let sheldonMsg = document.querySelector(".sheldon-msg");
let message = document.querySelector(".message.container");
let ready = document.querySelector("#readyButton");
let buttonContainer = document.querySelector(".button.container");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let lizardButton = document.querySelector("#lizard");
let spockButton = document.querySelector("#spock");

document.querySelector("#sheldonScore").innerHTML = `Sheldon Score: ${sheldonScore}`;
document.querySelector("#playerScore").innerHTML = `Player Score: ${playerScore}`;
document.querySelector("#round").innerHTML = `Round: ${round}`;
document.querySelector("#ties").innerHTML = `Ties: ${numOfTies}`


// Functions

function sheldonPicks() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

function chooseNewRule() {
  return Math.floor((Math.random() * 3) + 1);
}

function updateScreen(newPick) {
  document.querySelector("#sheldonScore").innerHTML = `Sheldon Score: ${sheldonScore}`;
  document.querySelector("#playerScore").innerHTML = `Player Score: ${playerScore}`; // Update Score
  document.querySelector("#round").innerHTML = `Round: ${round}`;
  document.querySelector("#ties").innerHTML = `Ties: ${numOfTies}`

  // Update new Sheldon pick
  sheldonMsg.innerHTML = `I will choose ${newPick}. :)`;
}

function showRules(ruleNumber) {
  console.log(`Rule Number: ${rule}`);
  switch (rule) {
    case 1: // Standard Rule
      message.innerHTML =
      `
      ROUND RULES: STANDARD MODE
      <br>
      Rock beats (Scissors or Lizard)
      <br> 
      Paper beats (Rock or Spock)
      <br>  
      Scissors beats (Paper or Lizard)
      <br>
      Lizard beats (Paper or Spock)
      <br>
      Spock beats (Scissors or Rock)
      `;
      break;

    case 2: // Weird Rule made by me lol
      message.innerHTML =
      `
      ROUND RULES: WEIRD  MODE
      <br>
      Rock beats (Paper or Spock)
      <br> 
      Paper beats (Scissors or Lizard)
      <br>  
      Scissors beats (Rock or Spock)
      <br>
      Lizard beats (Scissors or Rock)
      <br>
      Spock beats (Paper or Lizard)
      `;
      break;

    case 3: // Handicap in favor of Sheldon
      message.innerHTML =
      `
      ROUND RULES: HANDICAP
      <br>
      Rock ONLY beats Scissors
      <br> 
      Paper ONLY beats Lizard
      <br>  
      Scissors ONLY beats Paper
      <br>
      Lizard ONLY beats Spock
      <br>
      Spock ONLY beats Rock
      `;
      break;
  }
}

function playRound(p, c) {
  console.log(`Player: ${p}`);
  console.log(`Sheldon: ${c}`);

  if (p == c) {
    console.log("Tie");
    numOfTies += 1;
  }

  else if (rule == 1) {
    if (
      (p == "Rock" && (c == "Scissors" || c == "Lizard")) ||
      (p == "Paper" && (c == "Rock" || c == "Spock")) ||
      (p == "Scissors" && (c == "Paper" || c == "Lizard")) ||
      (p == "Lizard" && (c == "Paper" || c == "Spock")) ||
      (p == "Spock" && (c == "Scissors" || c == "Rock"))
    ) {
      playerScore += 1;
    } else {
      sheldonScore += 1;
    }
  } else if (rule == 2) {
    if (
      (p == "Rock" && (c == "Paper" || c == "Spock")) ||
      (p == "Paper" && (c == "Scissors" || c == "Lizard")) ||
      (p == "Scissors" && (c == "Rock" || c == "Spock")) ||
      (p == "Lizard" && (c == "Scissors" || c == "Rock")) ||
      (p == "Spock" && (c == "Paper" || c == "Lizard"))
    ) {
      playerScore += 1;
    } else {
      sheldonScore += 1;
    }
  } else if (rule == 3) {
    if (
      (p == "Rock" && c == "Scissors") ||
      (p == "Paper" && c == "Lizard") ||
      (p == "Scissors" && c == "Paper") ||
      (p == "Lizard" && c == "Spock") ||
      (p == "Spock" && c == "Rock")
    ) {
      playerScore += 1;
    } else {
      sheldonScore += 1;
    }
  }

  // Round End
  round += 1;

  // Sheldon picks
  sheldonChoice = sheldonPicks();
  updateScreen(sheldonChoice);

  // Choose new rule
  rule = chooseNewRule();
  showRules();
  setTimeout(() => { message.innerHTML = "" }, 3000)
}

// Game Starts here
buttonContainer.style.visibility = "hidden"; // Hides player buttons by default

// Initial Round Prep
ready.addEventListener("click", () => {
  ready.style.visibility = "hidden";
  buttonContainer.style.visibility = "visible";

  // Initial Rules
  rule = 1;
  showRules(rule);
  setTimeout(() => { message.innerHTML = "" }, 3000) // Hides the rules of the round after 3s

  // Sheldon Picks for Initial Round
  sheldonChoice = sheldonPicks();
  sheldonMsg.innerHTML = `I will choose ${sheldonChoice}.`;

  // End Initial Round Prep

  // Player Picks and Start Game
  rockButton.addEventListener("click", () => {
    playerChoice = "Rock";
    playRound(playerChoice, sheldonChoice);

  });

  paperButton.addEventListener("click", () => {
    playerChoice = "Paper";
    playRound(playerChoice, sheldonChoice);
  });

  scissorsButton.addEventListener("click", () => {
    playerChoice = "Scissors";
    playRound(playerChoice, sheldonChoice);
  });

  lizardButton.addEventListener("click", () => {
    playerChoice = "Lizard";
    playRound(playerChoice, sheldonChoice);
  });

  spockButton.addEventListener("click", () => {
    playerChoice = "Spock";
    playRound(playerChoice, sheldonChoice);
  });
});
