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
 * Simulates a round between player and computer, 
 * and returns possible winner
 */
function playRound(){
    

    //Convert both selections so first letter is capitalized 
    let computerChoice = getComputerChoice();
    let playerChoice = this.value.toUpperCase().charAt(0) + 
                       this.value.slice(1).toLowerCase();
    
    //Compare computer and player choices
    if(computerChoice === 'Rock' && playerChoice === 'Scissors'){
        
        //Display results of round and the choice of both players
        displayResults(`You Lose! ${computerChoice} beats ${playerChoice}`);
        displayChoices(playerChoice, computerChoice);
        return;

    }else if (computerChoice === 'Paper' && playerChoice === 'Rock'){
        
        displayResults(`You Lose! ${computerChoice} beats ${playerChoice}`);
        displayChoices(playerChoice, computerChoice);
        return;

    }else if (computerChoice === 'Scissors' && playerChoice === 'Paper'){

        displayResults(`You Lose! ${computerChoice} beats ${playerChoice}`);
        displayChoices(playerChoice, computerChoice);
        return;

    //If computer and player have some choice, it's a tie
    }else if (computerChoice === playerChoice){
             
        displayResults(`It's a Tie! You both picked ${playerChoice}`);
        displayChoices(playerChoice, computerChoice);
        return;
    }

        //If computer doesn't win and then player wins
        displayResults(`You Win! ${playerChoice} beats ${computerChoice}`);
        displayChoices(playerChoice, computerChoice);

}

/**
 * Display the choices the player and computer make
 * 
 * @param player - player's choice
 * @param computer - computer's choice
 */
function displayChoices(player, computer){
    const playerChoice = document.querySelector(".player_choice p");
    const computerChoice = document.querySelector(".computer_choice p");

    playerChoice.innerText = `You: ${player}`;
    computerChoice.innerText = `Computer: ${computer}`;
}

/**
 * 
 * Print result of the game
 * 
 * @param computerScore - computer's score
 * @param playerScore  - player's score
 * @param games - number of games played
 */
function getFinalMessage(playerScore, computerScore, games){
    //Number of ties in game
    let ties = games - (Number(playerScore) + Number(computerScore));

    //Test if player won or if there is tie
    if (playerScore > computerScore){
        
        return(`\nCongratulations, You won!\n
                    Games Played: ${games}\n
                    Your Score: ${playerScore}\n
                    Computer Score ${computerScore}\n
                    Ties: ${ties}`);
    
    } else if (computerScore > playerScore){
        
        return(`\nGame Over, You lose!\n
                    Games Played: ${games}\n
                    Your Score: ${playerScore}\n
                    Computer Score ${computerScore}\n
                    Ties: ${ties}`);
    
    } else {

        return(`\nGame Over, It's a tie!\n
                    Games Played: ${games}\n
                    Your Score: ${playerScore}\n
                    Computer Score ${computerScore}\n
                    Ties: ${ties}`);

    }

}

/**
 * Displays result of each round 
 * @param result - string representing the result of a round
 */
function displayResults(result){
    //Reference to game information and player choices
    const gameInfo = document.querySelector(".game_info");
    const choices = document.querySelector(".choices");

    //Reference to all elements in gameInfo 
    const results = document.querySelector(".results");
    const finalResult = document.querySelector(".final_result");
    const gameCounter = document.querySelector(".game_count span");
    const playerScore = document.querySelector(".player_score span");
    const computerScore = document.querySelector(".computer_score span");
 
    //Reference to buttons for game control
    const gameButtons = document.querySelector(".buttons");
    const resetButton = document.querySelector(".reset_button");
    
    //When game starts, make player choices and game info visible
    gameInfo.style.visibility = 'visible';
    choices.style.visibility = 'visible';

    //Fade in choices and game_info on first game
    if(gameCounter.innerText === '0'){
        choices.classList.toggle('fade');
        gameInfo.classList.toggle('fade');
    }

    //Increment game counter
    gameCounter.innerText++;

    //Display result of round
    results.innerText = result;

    //Increment score depending on result
    if(result.includes("Win")){
        playerScore.innerText++;
    } else if (result.includes("Lose")){
        computerScore.innerText++;
    }

    //Once a player reaches 5 points, display result of game
    if(playerScore.innerText === '5' || computerScore.innerText === '5'){
      
        //Get result of game 
        finalResult.innerText = getFinalMessage(playerScore.innerText, 
                                                computerScore.innerText,
                                                gameCounter.innerText); 
        
        //Hide game decision buttons and game info
        gameButtons.style.display = 'none';
        gameInfo.style.display = 'none';

        //Display final result of game
        finalResult.style.display = 'block';
        //Display reset button
        resetButton.style.display = 'block';  
    }  
}

/**
 * Reloads webpage
 */
function restartGame(){
   window.location.reload();
}

/**
 * Adds event listeners to buttons
 */
function addButtonListeners(){
    //All player decision buttons
    const playerButtons = document.querySelectorAll(".buttons button");
    playerButtons.forEach((button) => button.addEventListener('click', playRound));

    //Button to restart game/reload webpage
    const resetButton = document.querySelector(".reset_button button");
    resetButton.addEventListener('click', restartGame)
}

addButtonListeners();







