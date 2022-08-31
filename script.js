/**
 * Picks a number between 1 and 3 and sets computer's choice
 * to a corresponding value
 * 
 * @return choice computer makes
 */
function getComputerChoice(){
    //Get a random number between 1 and 3
    const randomNum = Math.floor(Math.random() * 3) + 1;
   
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
 * @return message displayed at the end of each round
 */
function playRound(playerSelection, computerSelection){
      
    //Convert both selections so first letter is capitalized 
    let computerChoice = computerSelection[0].toUpperCase() + 
                         computerSelection.slice(1).toLowerCase();
    let playerChoice = playerSelection[0].toUpperCase() + 
                       playerSelection.slice(1).toLowerCase();
    
    //Check if computer wins
    if(computerChoice === 'Rock' && playerChoice === 'Scissors'){
        
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    
    
    }else if (computerChoice === 'Paper' && playerChoice === 'Rock'){
        
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    
    
    }else if (computerChoice === 'Scissors' && playerChoice === 'Paper'){

        return `You Lose! ${computerChoice} beats ${playerChoice}`;

    
    //If computer and player have some choice, it's a tie
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

    return playerChoice;
}

/**
 * Validates user's input
 * 
 * @param playerChoice - user inputted choice
 * @returns if choice is valid or not
 */
function validatePlayerChoice(playerChoice){


    //Check if player's input is not empty and is either rock, paper or scissors
    if(playerChoice &&
       (playerChoice === 'ROCK' ||
       playerChoice ==='PAPER' ||
       playerChoice ==='SCISSORS')){

        return true;

       }

       //If none of the above conditions are met, choice is valid
       return false;
}

/**
 * Returns winner of a round or 'tie' if no winner
 * 
 * @param roundMessage - message declaring the outcome of a round
 * @returns the winner if there is one and 'tie' if not
 */
 function getRoundWinner(roundMessage){

    //convert string to lowercase so casing won't matter
    messageCheck = roundMessage.toLowerCase();



    //Check if the outcome message contains win, lose, or tie
    //Return winner or if round ends in tie 
    if (messageCheck.includes('win')){
        
        return 'player';
    
    } else if (messageCheck.includes('lose')){

        return 'computer';

    } 

    //No winner? Let program know it's a tie
        return 'tie';
}

/**
 * 
 * Print result of the game
 * 
 * @param computerScore - computer's score
 * @param playerScore  - player's score
 */
function printResult(playerScore, computerScore){

    //Test if player won or if there is tie
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

/**
 * Simulates a 5 round game of rock, paper, scissors
 */
function game(){

    //Variables to keep track of scores
    let playerScore = 0;
    let computerScore = 0;

    //Variable to get outcome of the game
    let outcome;

    //Message printed to user after each round
    let roundMessage;

    //5 round game
    for (let i = 0; i < 5; i++){

        //Gets message from playRound() using the get choice functions as params
        roundMessage = playRound(getPlayerChoice(), getComputerChoice());
        //Prints message to user
        console.log(roundMessage);

        //Gets the possible winner of round
        outcome = getRoundWinner(roundMessage);

        //Increments score based on outcome, if there is tie no one gets points
        if (outcome === 'player'){

            playerScore++;

        }else if(outcome === 'computer'){

            computerScore++;
        }    

    }

    //Prints result of the game
    printResult(playerScore, computerScore);

}

game();






