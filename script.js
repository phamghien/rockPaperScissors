function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"]; 
    return pick[Math.floor(Math.random() * pick.length)]; 
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "TIE!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "YOU WIN!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "YOU WIN!"; 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "YOU WIN!"; 
    } else {
        return "YOU LOSE!";
    }
}

function gameScore() {
    let playerScore = 0; 
    let computerScore = 0; 

    for(let count = 0; count < 5; count++){
        const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase(); 
        const computerSelection = getComputerChoice(); 
        console.log(playRound(playerSelection, computerSelection));

        if(playRound(playerSelection, computerSelection) == "YOU WIN!") {
            playerScore++; 
        } else {
            computerScore++; 
        }
    }

    if(playerScore > computerScore) {
        console.log("WINNER.")
    } else {
        console.log("LOSER.")
    }
}

gameScore(); 