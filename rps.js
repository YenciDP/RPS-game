
/*let usersChoice= prompt("Choose Rock, Paper or Scissors");
let fixedChoice=usersChoice.toLowerCase();*/
let computersChoice; //save result from computer chooses
let playerScore=0;
let cpuScore=0;

// get random number and choose rock paper or scissors
  let computerChooses =(random)=>{
    let randomN = Math.floor(Math.random() * 3) ;
    random=randomN;
    
    switch (random) {
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
  }


  //play 1 round of the game
let round=(cpuChoice, playersChoice)=>{
  let usersChoice= prompt("Choose Rock, Paper or Scissors"); //get user choice
  let fixedChoice=usersChoice.toLowerCase(); //make it lowercase so there won't be trouble
  computerChooses(); //execute computer choose so u get a different choice per round
  cpuChoice=computersChoice
  playersChoice=fixedChoice;


    if (playersChoice !== "scissors" && playersChoice !== "rock" && playersChoice !== "paper") {
        console.log(`"${playersChoice}" is not a valid Rock Paper Scissors choice`);
    }

      if (cpuChoice===playersChoice) {
        console.log("It's a tie!");
      } 

      if (cpuChoice==="scissors" && playersChoice==="rock"){
      console.log(`${playersChoice} beats ${cpuChoice}, Player gets a point!`)
      playerScore++;
    };

       if(cpuChoice==="rock" && playersChoice==="paper"){
        console.log(`${playersChoice} beats ${cpuChoice}, Player gets a point!`)
        playerScore++;
      };

        if (cpuChoice==="paper" && playersChoice==="scissors"){
        console.log(`${playersChoice} beats ${cpuChoice}, Player gets a point!`)
        playerScore++;
      };
    

     if(cpuChoice==="paper" && playersChoice==="rock"){
        console.log(`${cpuChoice} beats ${playersChoice}, Cpu gets a point!`)
        cpuScore++;
      };
      
     if (cpuChoice==="scissors" && playersChoice==="paper"){
     console.log(`${cpuChoice} beats ${playersChoice}, Cpu gets a point!`)
      cpuScore++;
    };
    
      
     if (cpuChoice==="rock" && playersChoice==="scissors"){
     console.log(`${cpuChoice} beats ${playersChoice}, Cpu gets a point!`)
     cpuScore++;
      
    };
      
    }
  
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
