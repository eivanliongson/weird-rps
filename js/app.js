// Set Variables
const weapons = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
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
let lizardButton = document.querySelector("#lizard");
let spockButton = document.querySelector("#spock");

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

  }
}

function playRound(p, c) {
  console.log(`Rule Number: ${rule}`);
  console.log(`Player: ${p}`);
  console.log(`Computer: ${c}`);

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
      computerScore += 1;
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
      computerScore += 1;
    }
  }

  // Round End
  round += 1;
  
  // Sheldon picks
  computerChoice = computerPick();
  updateScreen(computerChoice);

  // Choose new rule
  showRules();
  setTimeout(() => { message.innerHTML = "" }, 3000)
}

// Game Starts here
buttonContainer.style.visibility = "hidden"; // Hides player buttons by default

// Initial Round Prep
ready.addEventListener("click", () => {
  ready.style.visibility = "hidden";
  buttonContainer.style.visibility = "visible";

  // Initial Rule
  rule = 2;
  showRules(rule);
  setTimeout(() => { message.innerHTML = "" }, 3000) // Hides the rules of the round after 3s

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

  lizardButton.addEventListener("click", () => {
    playerChoice = "Lizard";
    playRound(playerChoice, computerChoice);
  });

  spockButton.addEventListener("click", () => {
    playerChoice = "Spock";
    playRound(playerChoice, computerChoice);
  });
});
