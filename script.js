let playerScore = 0; 
let computerScore = 0; 
let playerSelection; 
let computerSelection; 
let playerChoice; 

const playerScoreNumber = document.getElementById("playerScore"); 
const computerScoreNumber = document.getElementById("computerScore"); 
const buttons = document.querySelectorAll('.btn'); 
const output = document.querySelector("#output");
const ball = document.querySelector(".ball"); 
const gameOverModal = document.getElementById("gameOverModal"); 
const restartButton = document.getElementById("restart-button")

output.textContent = "Choose your move:"


// Button responses when clicked
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

// Generate random computer choice
function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"]; 
    return pick[Math.floor(Math.random() * pick.length)]; 
}

// Play game round and update score
function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection) {
        output.textContent = "TIE"; 
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        output.textContent = "YOU WIN"; 
        win(); 
        playerScore++; 
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        output.textContent = "YOU WIN"; 
        win(); 
        playerScore++; 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        output.textContent = "YOU WIN"; 
        win(); 
        playerScore++; 
    } else {
        output.textContent = "YOU LOSE"; 
        lose(); 
        computerScore++; 
    }

    playerScoreNumber.textContent = playerScore;
    computerScoreNumber.textContent = computerScore;
}

// Ball will go left if lose, ball will go right if win
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

// Game is over, restart game
function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }

  /* 
function openGameOverBox(){
    gameOverModal.classList.add("active");
}

function closeGameOverBox(){
    gameOverModal.classList.remove("active"); 
}

function gameOverText(){
    if(playerScore == 5){
        gameOverText.textContent = "You win!"
    }
    if(computerScore == 5){
        gameOverText.textContent = "You lose!"
    }
}

function restartGame() {
    gameOverModal.classList.remove("active");
    playerScore = 0; 
    computerScore = 0; 

} 
*/ 