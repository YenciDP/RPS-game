let randomN = Math.floor(Math.random() * 3) ;
let usersChoice= prompt("Choose Rock, Paper or Scissors");
let fixedChoice=usersChoice.toLowerCase();
let computersChoice;

  let computerChooses =(random)=>{
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
computerChooses();


let round=(cpuChoice, playersChoice)=>{
  cpuChoice=computersChoice;
  playersChoice=fixedChoice;

    if (playersChoice !== "scissors" && playersChoice !== "rock" && playersChoice !== "paper") {
        console.log(`"${playersChoice}" is not a valid Rock Paper Scissors choice`);
    }

      if (cpuChoice===playersChoice) {
        console.log("It's a tie!");
      } 

      if (cpuChoice==="scissors" && playersChoice==="rock"){
      console.log(`${playersChoice} beats ${cpuChoice}, Player gets a point!`)
    };

       if(cpuChoice==="rock" && playersChoice==="paper"){
        console.log(`${playersChoice} beats ${cpuChoice}, Player gets a point!`)
      };

        if (cpuChoice==="paper" && playersChoice==="scissors"){
        console.log(`${playersChoice} beats ${cpuChoice}, Player gets a point!`)
      };
    

     if(cpuChoice==="paper" && playersChoice==="rock"){
        console.log(`${cpuChoice} beats ${playersChoice}, Cpu gets a point!`)
      };
      
     if (cpuChoice==="scissors" && playersChoice==="paper"){
     console.log(`${cpuChoice} beats ${playersChoice}, Cpu gets a point!`)};
    
      
     if (cpuChoice==="rock" && playersChoice==="scissors"){
     console.log(`${cpuChoice} beats ${playersChoice}, Cpu gets a point!`)
    };
      
    }
  
 
round()


