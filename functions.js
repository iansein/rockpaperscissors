let buttonRock = document.querySelector(".rock");
let buttonPaper = document.querySelector(".paper");
let buttonScissors = document.querySelector(".scissors");
let userScore = document.querySelector(".user-score");
let computerScore = document.querySelector(".computer-score");
let endGame = document.querySelector(".end-game");
let buttonRetry = document.querySelector(".button-retry");
let countUserScore = 0;
let countScoreComputer = 0;
let result = document.querySelector(".result");
let resultExplanation = document.querySelector(".result-explanation");

buttonRetry.addEventListener("click", () => {
  buttonRock.disabled = false;
  buttonPaper.disabled = false;
  buttonScissors.disabled = false;
  buttonRetry.style.display = "none";
  countUserScore = 0;
  countScoreComputer = 0;
  userScore.textContent = `Your Score: ${countUserScore.toString()}`;
  computerScore.textContent = `Computer Score: ${countScoreComputer.toString()}`;
  endGame.textContent = "";
  result.textContent = "";
  resultExplanation.textContent = "";
});
buttonRock.addEventListener("click", () => {
  let score = playRound("rock", getComputerChoice());
  if (score === "win") {
    countUserScore++;
    userScore.textContent = `Your Score: ${countUserScore.toString()}`;
  } else if (!score) {
    countScoreComputer++;
    computerScore.textContent = `Computer Score: ${countScoreComputer.toString()}`;
  }
  if (countUserScore === 5 || countScoreComputer === 5) {
    endGame.textContent = "GAME FINISHED";
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
    buttonRetry.style.display = "block";
  }
});

buttonPaper.addEventListener("click", () => {
  let score = playRound("paper", getComputerChoice());
  if (score === "win") {
    countUserScore++;
    userScore.textContent = `Your Score: ${countUserScore.toString()}`;
  } else if (!score) {
    countScoreComputer++;
    computerScore.textContent = `Computer Score: ${countScoreComputer.toString()}`;
  }
  if (countUserScore === 5 || countScoreComputer === 5) {
    endGame.textContent = "GAME FINISHED";
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
    buttonRetry.style.display = "block";
  }
});

buttonScissors.addEventListener("click", () => {
  let score = playRound("scissors", getComputerChoice());
  if (score === "win") {
    countUserScore++;
    userScore.textContent = `Your Score: ${countUserScore.toString()}`;
  } else if (!score) {
    countScoreComputer++;
    computerScore.textContent = `Computer Score: ${countScoreComputer.toString()}`;
  }
  if (countUserScore === 5 || countScoreComputer === 5) {
    endGame.textContent = "GAME FINISHED";
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
    buttonRetry.style.display = "block";
  }
});

// Get a random computer choice from 3 options (Paper, Rock or Scissors)
function getComputerChoice() {
  let paper = `paper`;
  let rock = `rock`;
  let scissors = `scissors`;
  let arrayForOptions = [];
  arrayForOptions.push(paper, rock, scissors);
  return arrayForOptions[Math.floor(Math.random() * arrayForOptions.length)];
}

// Play one round of the game returning a message of victory, defeat or draw.

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    result.textContent = "YOU WON";
    result.style.color = "green";
    resultExplanation.textContent = `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
    return "win";
  } else if (playerSelection === computerSelection) {
    result.textContent = "YOU DRAW";
    result.style.color = "yellow";
    resultExplanation.textContent = `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } draws ${computerSelection}`;
    return "draw";
  } else {
    result.textContent = "YOU LOSE";
    result.style.color = "red";
    resultExplanation.textContent = `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } loses ${computerSelection}`;
    return false;
  }
}
