
let computersChoice; //save result from computer chooses
let playerScore=0;
let cpuScore=0;
const player=document.querySelector("#playerScore"),
         cpu=document.querySelector("#cpuScore"),
         rock=document.querySelector("#rock"),
          scissors= document.querySelector("#scissors"),
          paper= document.querySelector('#paper'),
          message=document.querySelector(".message");





// get random number and choose rock paper or scissors
  let computerChooses =()=>{
    let randomN = Math.floor(Math.random() * 3) ;
    
    
    switch (randomN) {
      case 0:
        computersChoice="paper";
        break;
      case 1:
        computersChoice="rock";
        break;
        case 2: 
        computersChoice="scissors"
        break;

    }
    return computersChoice
  }


  //play 1 round of the game
let round=(cpuChoice, playersChoice)=>{

    if (playersChoice !== "scissors" && playersChoice !== "rock" && playersChoice !== "paper") {
        console.log(`"${playersChoice}" is not a valid Rock Paper Scissors choice`);
    }

      if (cpuChoice===playersChoice) {
        message.textContent="I'ts a tie!";
      } 

      if (cpuChoice==="scissors" && playersChoice==="rock"){
      message.textContent="Rock Beats Scissors! Player gets a point"
      playerScore++;
      player.textContent=playerScore;
    };

       if(cpuChoice==="rock" && playersChoice==="paper"){
        message.textContent="Paper Beats Rock! Player gets a point"
        playerScore++;
        player.textContent=playerScore;
      };

        if (cpuChoice==="paper" && playersChoice==="scissors"){
        message.textContent="Scissors Beats Paper! Player gets a point"
        playerScore++;
        player.textContent=playerScore;
      };
    

     if(cpuChoice==="paper" && playersChoice==="rock"){
        message.textContent=`Paper Beats Rock, Cpu gets a point!`
        cpuScore++;
         cpu.textContent=cpuScore;
      };
      
     if (cpuChoice==="scissors" && playersChoice==="paper"){
     message.textContent=`Scissors Beats Paper, Cpu gets a point!`
      cpuScore++;
       cpu.textContent=cpuScore;
    };
    
      
     if (cpuChoice==="rock" && playersChoice==="scissors"){
     message.textContent=`Rock Beats Scissors, Cpu gets a point!`
     cpuScore++;
     cpu.textContent=cpuScore;
      
    };

    if (playerScore===3) {
      message.textContent="Congratulations, You Win!"
      playerScore=0;
      cpuScore=0;
      cpu.textContent=cpuScore;
      player.textContent=playerScore;
    }
    if (cpuScore===3) {
      message.textContent="Try Again, Cpu Wins!"
      playerScore=0;
      cpuScore=0;
      cpu.textContent=cpuScore;
      player.textContent=playerScore;
    }

    }
  
    paper.onclick= ()=> { round(computerChooses(), "paper")}
    rock.onclick= ()=> { round(computerChooses(), "rock")}
    scissors.onclick= ()=> { round(computerChooses(), "scissors")}

 //loop to count rounds and score
let game =()=>{
  //use and so if any of the 2 is true then stops
  while (playerScore<3 && cpuScore <3) {
    round();
    console.log(`current score Player: ${playerScore} - Cpu: ${cpuScore}`);
  } 
  if (playerScore === 3) {
    console.log(`You win`);
  } if (cpuScore=== 3) {
    console.log(`Try again, Cpu wins!`);
  }


}

//game();
