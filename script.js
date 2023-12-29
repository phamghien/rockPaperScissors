let playerScore = 0; 
let computerScore = 0; 
let playerSelection; 
let computerSelection; 
let playerChoice; 

var ball = document.querySelector(".ball"); 

const buttons = document.querySelectorAll('.btn'); 

const output = document.querySelector("#output");
output.textContent = "Choose your move:"

buttons.forEach((button)=>{button.addEventListener('click',()=>{

    playerChoice = button.id;
    if (playerChoice == "rock"){
        playerSelection = "rock"; 
    }
    else if (playerChoice == "paper"){
        playerSelection = "paper"; 
    }
    else if (playerChoice == "scissors")
    {
        playerSelection = "scissors"; 
    }

    computerSelection = getComputerChoice(); 
    playRound(playerSelection, computerSelection);
    })

})

function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"]; 
    return pick[Math.floor(Math.random() * pick.length)]; 
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection) {
        output.textContent = "TIE"; 
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        output.textContent = "YOU WIN"; 
        win(); 
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        output.textContent = "YOU WIN"; 
        win(); 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        output.textContent = "YOU WIN"; 
        win(); 
    } else {
        output.textContent = "YOU LOSE"; 
        lose(); 
    }
}

function lose(){
    ball.classList.add("lose");
    ball.addEventListener("animationend", onAnimationEnd); 
}

function win(){
    ball.classList.add("win");
    ball.addEventListener("animationend", onAnimationEnd); 
}

function onAnimationEnd() {
    ball.classList.remove("lose"); 
    ball.classList.remove("win"); 
}


/*
function gameScore() {
    

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
*/