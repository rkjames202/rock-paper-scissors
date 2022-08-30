
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




