const choice=['rock',"paper","scissor"];
const getComputerChoice=()=> choice[Math.floor(Math.random()*3)];

// Function to Play One Round
function playRound(playerSelection,computerSelection=getComputerChoice()){
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

//Display result 
let result;
 const rockFunction= ()=>{
   result=playRound("rock");
   displayResult(result);
  }
  const paperFunction= ()=>{
    result=playRound("paper");
    displayResult(result);
  }
  const scissorFunction= ()=>{
    result=playRound("scissor");
    displayResult(result);
    displayResult('');
  }
   
const rockBtn=document.querySelector("#rockButton");
const paperBtn=document.querySelector("#paperButton");
const scissorBtn=document.querySelector("#scissorButton");

rockBtn.addEventListener("click",rockFunction);
paperBtn.addEventListener("click",paperFunction);
scissorBtn.addEventListener("click",scissorFunction);

    
function displayResult(selection){
  const div=document.createElement('div');
  const pare=document.createElement('p');
  pare.textContent=selection;
  
  div.classList='display';
  div.appendChild(pare);
  const divBtn=document.querySelector('.button');
  divBtn.insertAdjacentElement('afterend',div);
  setTimeout(()=>{
    div.remove();
  },1500);
}

  











  
  

