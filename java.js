function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
} 

function playGame(humanSelection, computerChoice){
    
    let computerSelection = computerChoice();
    do{
        if((humanSelection == 1 && computerSelection == 3)||(humanSelection == 2 && computerSelection ==1) ||(humanSelection == 3 && computerSelection ==2)){
            message.textContent = "You win";
            humanScore +=1;
            player_Score.textContent = humanScore;

        }
        else if((humanSelection == 1 && computerSelection == 2)||(humanSelection == 2 && computerSelection ==3)||(humanSelection == 3 && computerSelection ==1)){
            message.textContent = "You lose";
            computerScore +=1;
            computer_Score = computerScore;

        }
        else{
            message.textContent = "It's a tied";
        }
    }while(humanScore != 5 || computerScore != 5);
    if(humanScore > computerScore){
        message.textContent = `You are the winner. Total score: ${humanScore}`;
    }
    else if(computerScore > humanScore){
        message.textContent = `The computer is the winner. Total score: ${computerScore}`;
    }
    else {
        message.textContent =`Overall: The game is tied. Your Score: ${humanScore}. Computer Score: ${computerScore}`;
    }
   
}
let humanScore = 0;
let computerScore = 0;
let player_Score = document.querySelector("#player");
let computer_Score = document.querySelector("#computer");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let message = document.querySelector("#message");
rock.addEventListener("click", playGame(1,getComputerChoice));
paper.addEventListener("click", playGame(2,getComputerChoice));
scissors.addEventListener("click", playGame(3,getComputerChoice));
