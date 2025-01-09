function getHumanChoice(){
    let user = prompt("What's your choice: ");
    if(user == "rock"|| user =="Rock"){
        return 1;
    }
    else if(user == "paper"|| user == "Paper"){
        return 2;
    }
    else if(user == "scissors"||user =="scissors"){
        return 3;
    }
    else{
        console.log("Please type the choice: ");
    }

   
}
function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}

function playGame(humanChoice, computerChoice){
    let i = 0;
    let humanSelection;
    let computerSelection;
    while(i<5){
        humanSelection = humanChoice();
        computerSelection = computerChoice();
        if((humanSelection == 1 && computerSelection == 3)||(humanSelection == 2 && computerSelection ==1) ||(humanSelection == 3 && computerSelection ==2)){
            console.log("You wins");
            humanScore +=1;
        }
        else if((humanSelection == 1 && computerSelection == 2)||(humanSelection == 2 && computerSelection ==3)||(humanSelection == 3 && computerSelection ==1)){
            console.log("Computer wins");
            computerScore +=1;
        }
        else{
            console.log("Tied");
        }
        i +=1;
    }
    if(humanScore > computerScore){
        console.log(`Overall: You wins. Total score: ${humanScore}`);
    }
    else if(computerScore > humanScore){
        console.log(`Overall: Computer wins. Total score: ${computerScore}`);
    }
    else {
        console.log(`Overall: The game is tied. Your Score: ${humanScore}. Computer Score: ${computerScore}`);
    }
   
}
let humanScore = 0;
let computerScore = 0;
playGame(getHumanChoice,getComputerChoice); /* pass call-back function*/