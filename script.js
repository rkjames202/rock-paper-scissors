
/**
 * Picks a number between 1 and 3 and sets computer's choice
 * to a corresponding value
 * 
 * @return choice computer makes
 */
function getComputerChoice(){
    //Get a random number between 1 and 3
    const randomNum = Math.floor(Math.random() * 3) + 1;

    let choice = "";
    
    //Use random number to determine computer choice
    if (randomNum === 1){
        return 'Rock';
    } else if (randomNum === 2){
        return 'Paper';
    } else if (randomNum === 3){
        return 'Scissors';
    }

}

/**
 * Simulates a round between player and computer
 * 
 * @param playerSelection - user inputted selection 
 * @param computerSelection - computer generated selection
 * @return String declaring the outcome of the round
 */
function playRound(playerSelection, computerSelection){
      
    //Convert both selections so first letter is capitalized 
    let computerChoice = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase();
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    //If computer selects rock, see if player selected scissors
    if(computerChoice === 'Rock' && playerChoice === 'Scissors'){
        
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    
    //If computer selects paper, see if player selected rock
    }else if (computerChoice === 'Paper' && playerChoice === 'Rock'){
        
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    
    //If computer selects scissors, see if player selected paper
    }else if (computerChoice === 'Scissors' && playerChoice === 'Paper'){

        return `You Lose! ${computerChoice} beats ${playerChoice}`;

    //If computer and player have the same choice
    }else if (computerChoice === playerChoice){
        
        return `It's a tie! You both pick ${playerChoice}`;
    
    }

    //If computer doesn't win player does
        return `You Win! ${playerChoice} beats ${computerChoice}`;

}


