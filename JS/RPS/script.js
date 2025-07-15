// console.log("Hello WOrld")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if(random == 0){
        return "rock";
    }
    else if(random == 1){
        return "paper";
    }
    else{return "scissors";}
}

function getHumanChoice(){
    let humanNum = prompt("Enter either from rock, paper, scissors: ").toLowerCase();
    return humanNum;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        if(humanChoice === computerChoice){
            prompt("It's a TIE 🤝");
        }
        else if(humanChoice === "rock"){
            if(computerChoice === "scissors"){
                prompt("Computer chose Scissors! You WON! 🫡");
                humanScore++;
            }
            else{
                prompt("Computer chose Paper! You LOST! 😌");
                computerScore++;
            }
        }
        else if(humanChoice === "scissors"){
            if(computerChoice === "paper"){
                prompt("Computer chose Paper! You WON!");
                humanScore++;
            }
            else{
                prompt("Computer chose Rock! You LOST!");
                computerScore++;
            }
        }
        else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                prompt("Computer chose Rock! You WON!");
                humanScore++;
            }
            else{
                prompt("Computer chose Scissors! You LOST!");
                computerScore++;
            }
        }
        else {
            prompt("Invalid input. Please enter rock, paper, or scissors.");
        }
    }

    for(let i = 0; i < 5; i++){
        playRound();
    }
    alert(`Final Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}


playGame();
