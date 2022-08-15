const rockChoice = document.querySelector(".rock");
const paperChoice = document.querySelector(".paper");
const scissorsChoice = document.querySelector(".scissors");
const resetButton = document.querySelector(".resetBtn");

var gameStatus = document.querySelector(".status");
var playerScoreEl = document.querySelector(".plr_score");
var compScoreEl = document.querySelector(".com_score");
var drawScoreEl = document.querySelector(".drw_score");

var playerScore = 0;
var compScore = 0;
var drawScore = 0;

var compChoice = "";
var userChoice = "";

const choices = ["Rock", "Paper", "Scissors"];

function addEvents() {
    rockChoice.addEventListener("click", eventInnerRock);
    paperChoice.addEventListener("click", eventInnerPaper);
    scissorsChoice.addEventListener("click", eventInnerScissors);
}

function removeEvents() {
    rockChoice.removeEventListener("click", eventInnerRock);
    paperChoice.removeEventListener("click", eventInnerPaper);
    scissorsChoice.removeEventListener("click", eventInnerScissors);
}

function getCompChoice() {
    compChoice = choices[Math.floor(Math.random() * 3)];
    console.log(compChoice);
}

function winCheck() {

    if (userChoice == compChoice) {
        drawScore++;
        return "Computer Chose "+compChoice+" | Draw!";
    }
    
    if (userChoice == choices[0] && compChoice == choices[2]) {
        playerScore++;
        return "Computer Chose "+compChoice+" | Player Wins!";
    } else if (userChoice == choices[1] && compChoice == choices[0]) {
        playerScore++;
        return "Computer Chose "+compChoice+" | Player Wins!";       
    } else if (userChoice == choices[2] && compChoice == choices[1]) {
        playerScore++;
        return "Computer Chose "+compChoice+" | Player Wins!";;      
    } else {
        compScore++;
        return "Computer Chose "+compChoice+" | Computer Wins!";;
    }

}

function setStatus(status) {
    gameStatus.innerHTML = status;
}

function nextRound() {
    setStatus("Make Your Play!");
    addEvents();
}

function updateDisplayScore() {
    playerScoreEl.innerHTML = playerScore;
    compScoreEl.innerHTML = compScore;
    drawScoreEl.innerHTML = drawScore;
}

function mainLoop() {
    getCompChoice();
    let newStatus = winCheck();
    setStatus(newStatus);
    updateDisplayScore();
    setTimeout(nextRound, 3000);
}

function eventInnerRock() {
    userChoice = choices[0]; 
    removeEvents();
    mainLoop();
}

function eventInnerPaper() {
    userChoice = choices[1]; 
    removeEvents();
    mainLoop();
}

function eventInnerScissors() {
    userChoice = choices[2]; 
    removeEvents();
    mainLoop();
}

addEvents();

resetButton.addEventListener("click", function() {
    compScore = 0;
    playerScore = 0;
    drawScore = 0;
    updateDisplayScore();
})


