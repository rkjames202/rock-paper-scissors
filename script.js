
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
 * @return the outcome of the round
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
        
        return `It's a Tie! You both pick ${playerChoice}`;
    
    }

    //If computer doesn't win player does
        return `You Win! ${playerChoice} beats ${computerChoice}`;

}

/**
 * Prompts user to enter choice between rock, paper, or scissors
 * 
 * @returns - user inputted choice
 */
function getPlayerChoice(){
    
    //Prompt user to enter choice
   let playerChoice = prompt("Enter your choice. Rock, Paper, or Scissors?").toUpperCase();

   //While input is not valid, prompt user
   while (!validatePlayerChoice(playerChoice)){
        
        playerChoice = prompt("Please enter valid choice. Rock, Paper, or Scissors?").toUpperCase();
   
    }
}

/**
 * Validates user's input
 * 
 * @param playerChoice - user inputted choice
 * @returns boolean if choice is valid or not
 */
function validatePlayerChoice(playerChoice){

    let validChoice = true;

    //Check if player's input is not empty and is either rock, paper or scissors
    if(!playerChoice ||
       (playerChoice != 'ROCK' &&
       playerChoice !='PAPER' &&
       playerChoice !='SCISSORS')){

        validChoice = false;

       }

       //If none of the above conditions are met, choice is valid
       return validChoice;
}

/**
 * Returns winner of a round or 'tie' if no winner
 * 
 * @param outcomeMessage - message declaring the outcome of a round
 * @returns the winner if there is one and 'tie' if not
 */
 function getOutcome(outcomeMessage){

    //convert string to uppercase so casing won't matter
    outcomeCheck = outcomeMessage.toLowerCase();

    //Check if the outcome message contains win, lose, or tie
    //Return winner or if round ends in tie 
    if (outcomeMessage.includes('win')){
        
        return 'player';
    
    } else if (outcomeMessage.includes('lose')){

        return 'computer';

    } 

    //No winner? Let program know it's a tie
        return 'tie';
}

/**
 * 
 * @param computerScore - computer's score
 * @param playerScore  - player's score
 */
function printWinner(computerScore, playerScore){

    //Test for winner
    if (playerScore > computerScore){
        
        console.log(`Congratulations, You won! 
                    Your Score: ${playerScore}
                    Computer Score ${computerScore}`);
    
    } else if (computerScore > playerScore){
        
        console.log(`Game Over, You lose!
                    Your Score: ${playerScore}
                    Computer Score ${computerScore}`);
    
    } else {

        console.log(`Game Over, It's a tie!
                    Your Score: ${playerScore}
                    Computer Score ${computerScore}`);

    }

}







