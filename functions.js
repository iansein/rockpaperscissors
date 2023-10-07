function getComputerChoice(){
    let paper = `paper`;
    let rock = `rock`;
    let scissors = `scissors`;
    let arrayForOptions = [];
    arrayForOptions.push(paper, rock, scissors);
    return arrayForOptions[Math.floor(Math.random() * arrayForOptions.length)];
}

function PlayTheGame(playerSelection, computerSelection){
    if(!(playerSelection) || (playerSelection !== `paper` && playerSelection !== `rock` && playerSelection !== `scissors`)){
        return `ERROR: Write a right choice, 'Rock, Paper or Scissors'`
    }
    else{
        let defeatMessage = `You Lose, ${computerSelection} beats ${playerSelection}`;;
        let victoryMessage = `You Won, ${playerSelection} beats ${computerSelection}`;
        let drawMessage = `Yo draw, ${playerSelection} draws ${computerSelection}`;
    
        if(playerSelection === `paper` && computerSelection === `rock` || playerSelection === `rock` && computerSelection === `scissors` ||
            playerSelection === `scissors` && computerSelection === `paper`){
    
            return victoryMessage;
        }
    
        else if(playerSelection === computerSelection){
            
            return drawMessage;
        }
        else{
            return defeatMessage;
        }
    }
}

let playerSelection = prompt("Enter your choice... (Paper, Rock or Scissors").toLocaleLowerCase();
let computerSelection = getComputerChoice();
console.log(PlayTheGame(playerSelection, computerSelection));
