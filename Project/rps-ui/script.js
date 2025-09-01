document.getElementById("rock").addEventListener('click', () => playRound("rock"))
document.getElementById("paper").addEventListener('click', () => playRound("paper"))
document.getElementById("scissor").addEventListener('click', () => playRound("scissor"))

let humanScore = 0;
let computerScore = 0;
let tie = 0;

const resultDisplay = document.getElementById("resultDisplay");

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "rock";
  } else if (random == 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

function updateResult(message){
    const p = document.createElement("p");
    p.textContent = message;
    resultDisplay.appendChild(p);
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    updateResult(`Round result: It's a TIE 🤝😅 (Both chose ${humanChoice})`);
    tie++;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissor") {
      updateResult("Computer chose ✂️ scissor! You WON! 🏆😎");
      humanScore++;
    } else {
      updateResult("Computer chose 📄 Paper! You LOST! 💔");
      computerScore++;
    }
  } else if (humanChoice === "scissor") {
    if (computerChoice === "paper") {
      updateResult("Computer chose 📄 Paper! You WON! 🏆😎");
      humanScore++;
    } else {
      updateResult("Computer chose 🪨 Rock! You LOST! 😭💔");
      computerScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      updateResult("Computer chose 🪨 Rock! You WON! 🏆😎");
      humanScore++;
    } else {
      updateResult("Computer chose ✂️ scissor! You LOST! 😭💔");
      computerScore++;
    }
  } else {
    updateResult("Invalid input. Please enter rock, paper, or scissor. 🤔❓");
  }
}
