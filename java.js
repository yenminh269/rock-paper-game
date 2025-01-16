function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
} 

function playGame(humanSelection){
    if(humanScore==5 || computerScore==5){
        return;
    }
    let computerSelection = getComputerChoice();
    if(humanScore < 5 || computerScore < 5){
        if((humanSelection == 1 && computerSelection == 3)||(humanSelection == 2 && computerSelection ==1) ||(humanSelection == 3 && computerSelection ==2)){
            message.textContent = "You win";
            humanScore +=1;
            player_Score.textContent =  humanScore + " points";

        }
        else if((humanSelection == 1 && computerSelection == 2)||(humanSelection == 2 && computerSelection ==3)||(humanSelection == 3 && computerSelection ==1)){
            message.textContent = "You lose";
            computerScore +=1;
            computer_Score.textContent =  computerScore + " points";

        }
        else{
            message.textContent = "It's a tied";
        }
            
        }
    if(humanScore == 5){
        message.textContent = `You are the winner.`;
        }
    else if(computerScore == 5){
        message.textContent = `The computer is the winner.`;
        }
    else {
        return;
        }
}

let humanScore = 0;
let computerScore = 0;
let player_Score = document.querySelector("#player-score");
let computer_Score = document.querySelector("#computer-score");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let message = document.querySelector("#message");

rock.addEventListener("click",() => playGame(1));
scissors.addEventListener("click",() => playGame(3));
paper.addEventListener("click",() => playGame(2));

