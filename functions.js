
// Get a random computer choice from 3 options (Paper, Rock or Scissors)

function getComputerChoice(){
    let paper = `paper`;
    let rock = `rock`;
    let scissors = `scissors`;
    let arrayForOptions = [];
    arrayForOptions.push(paper, rock, scissors);
    return arrayForOptions[Math.floor(Math.random() * arrayForOptions.length)];
}

// Play one round of the game returning a message of victory, defeat or draw.

function playRound(playerSelection, computerSelection){
    if(!(playerSelection) || (playerSelection !== `paper` && playerSelection !== `rock` && playerSelection !== `scissors`)){
        return `ERROR: Write a right choice, 'Rock, Paper or Scissors'`
    }
    else{
        let defeatMessage = `You Lose, ${computerSelection} beats ${playerSelection}`;;
        let victoryMessage = `You Won, ${playerSelection} beats ${computerSelection}`;
        let drawMessage = `You draw, ${playerSelection} draws ${computerSelection}`;
    
        if(playerSelection === `paper` && computerSelection === `rock` || playerSelection === `rock` && computerSelection === `scissors` ||
            playerSelection === `scissors` && computerSelection === `paper`){
            console.log(victoryMessage);
            return "win";
        }
        else if(playerSelection === computerSelection){
            
            console.log(drawMessage);
            return "draw";
        }
        else{
            console.log(defeatMessage);
            return "defeat";
        }
    }
}

// Play 5 rounds and shows the currently score of both after one game and the final score at the end. 

function playGame(){   
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;

   for(let i = 0; i<5; i++){
    playerSelection = prompt("Enter your choice... (Paper, Rock or Scissors)").toLowerCase();
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

     if(result === `win`){
        playerScore++;
     }
     else if(result === `defeat`){
        computerScore++;
     }
     console.log(`Your score: ${playerScore}
     Computer score: ${computerScore}`);
   }

   if(playerScore > computerScore){
    return `You Won`;
   }
   else if(playerScore < computerScore){
    return `You Lose`;
   }
   else{
    return `You Draw`;
   }
}


console.log(playGame());
