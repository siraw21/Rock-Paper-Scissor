const choice=['rock',"paper","scissor"];

const getComputerChoice=()=> choice[Math.floor(Math.random()*3)];

function getPlayerChoice(){
  let userChoice=prompt("\n ***Enter your choice***  \n .Rock \n .Paper \n .Scissor ? ");
  userChoice=userChoice.toLowerCase();
  if(!choice.includes(userChoice)){
     console.log("The input that you inserted is invalid,please try again ")
    userChoice=getPlayerChoice();
  }
  return userChoice;
}
// Function to Play One Round
function playRound(playerSelection,computerSelection){
  if(playerSelection===computerSelection){
    return"It's a tie!";
  }else if(playerSelection==="rock"&&computerSelection==="scissor"){
    return "You win! Rock beats scissors.";
  }else if(playerSelection==="paper"&&computerSelection==="rock"){
    return "You win! paper beats rock.";
  }else if(playerSelection==="scissor"&&computerSelection==="paper"){
    return "You win! scissor beats paper.";
  }else{
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

// Function to play multiple round
function playGame(){
  let playerScore=0;
  let computerScore=0;

  for(let i=0;i<5;i++){
    const playerSelection=getPlayerChoice();
    const computerSelection=getComputerChoice();

    const result=playRound(playerSelection,computerSelection);
    console.log(result);
    if(result.substring(0,8)==="You win!"){
      playerScore++
    }else if(result.substring(0,8)==="You lose"){
      computerScore++
    }
  }
  // Display final score
  if(playerScore>computerScore){
    console.log("You won the game!");
  }else if(playerScore<computerScore){
    console.log("Computer won the game!");
  }else{
    console.log("It's a tie game!")
  }
}

let userGameModeInput=prompt("Set Mode Of The Game \n 1:One Round \n 2:Multiple Round")
 
function selectGameMode(userGameModeInput){
  if(userGameModeInput==="1"){
    console.log(playRound(getPlayerChoice(),getComputerChoice()));
  }else if(userGameModeInput==="2"){
    playGame();
  }else{
    console.log("Invalid input");
  }
}
   
selectGameMode(userGameModeInput);


    


    




  
  

