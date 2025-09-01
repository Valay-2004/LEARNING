document.getElementById("rock").addEventListener('click', () => playRound("rock"))
document.getElementById("paper").addEventListener('click', () => playRound("paper"))
document.getElementById("scissor").addEventListener('click', () => playRound("scissor"))

let humanScore = 0;
let computerScore = 0;
let tie = 0;

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
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    alert("It's a TIE 🤝😅");
    console.log(`Round result: It's a TIE 🤝😅 (Both chose ${humanChoice})`);
    tie++;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissor") {
      alert("Computer chose ✂️ scissor! You WON! 🏆😎");
      console.log("Computer chose ✂️ scissor! You WON! 🏆😎");
      humanScore++;
    } else {
      alert("Computer chose 📄 Paper! You LOST! �💔");
      console.log("Computer chose 📄 Paper! You LOST! �💔");
      computerScore++;
    }
  } else if (humanChoice === "scissor") {
    if (computerChoice === "paper") {
      alert("Computer chose 📄 Paper! You WON! 🏆😎");
      console.log("Computer chose 📄 Paper! You WON! 🏆😎");
      humanScore++;
    } else {
      alert("Computer chose 🪨 Rock! You LOST! 😭💔");
      console.log("Computer chose 🪨 Rock! You LOST! 😭💔");
      computerScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      alert("Computer chose 🪨 Rock! You WON! 🏆😎");
      console.log("Computer chose 🪨 Rock! You WON! 🏆😎");
      humanScore++;
    } else {
      alert("Computer chose ✂️ scissor! You LOST! 😭💔");
      console.log("Computer chose ✂️ scissor! You LOST! 😭💔");
      computerScore++;
    }
  } else {
    alert("Invalid input. Please enter rock, paper, or scissor. 🤔❓");
    console.log("Invalid input. Please enter rock, paper, or scissor. 🤔❓");
  }
}
