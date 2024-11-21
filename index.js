function getComputerChoice () {
    //Randomly generate a number between 0 and 2
    randomInt = Math.floor(Math.random() * 3);
    //create a conditional that will assign a number to rock, paper or scissor and return it
  if (randomInt === 0) {
    return "rock";
  } else if (randomInt === 1) {
    return "paper";
  } else {
    return "scissors";
  }
  }

  let humanScore = 0;
  let computerScore = 0;

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button)=> {

    button.addEventListener("click", (event) => {
      let humanChoice = event.target.id;
      function playRound (humanChoice, computerChoice) {
      humanChoice = humanChoice;
      computerChoice = getComputerChoice();

      const msg = document.querySelector(".message");
      const hscore = document.querySelector(".player");
      const cscore = document.querySelector(".computer");
      //Draws
      if (humanChoice === "rock" && computerChoice === "rock") {
        msg.textContent = "It's a draw";
        console.log("It's a draw");
      }
      if (humanChoice === "paper" && computerChoice === "paper") {
        msg.textContent = "It's a draw";
        console.log("It's a draw");
      }
      if (humanChoice === "scissors" && computerChoice === "scissors") {
        msg.textContent = "It's a draw";
        console.log("It's a draw");
        }
      //Player Wins
      if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        hscore.textContent = `Player Score: ${humanScore}`;
        msg.textContent = `You win ${humanChoice} beats ${computerChoice}`;
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
      }
      if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        hscore.textContent = `Player Score: ${humanScore}`;
        msg.textContent = `You win ${humanChoice} beats ${computerChoice}`;
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
      }
      if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        hscore.textContent = `Player Score: ${humanScore}`;
        msg.textContent = `You win ${humanChoice} beats ${computerChoice}`;
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
      }
      //Player loses
      if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        cscore.textContent = `Computer Score: ${computerScore}`;
        msg.textContent = `You lose ${computerChoice} beats ${humanChoice}`
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
      }
      if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        cscore.textContent = `Computer Score: ${computerScore}`;
        msg.textContent = `You lose ${computerChoice} beats ${humanChoice}`
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
      }
      if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        cscore.textContent = `Computer Score: ${computerScore}`;
        msg.textContent = `You lose ${computerChoice} beats ${humanChoice}`
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
      }
    }

      if (humanScore > computerScore) {
        msg.textContent = `You win with ${humanScore} points`;
        console.log (`You win with ${humanScore} points`)
      }
      if (computerScore > humanScore) {
        msg.textContent = `You lose, your score was ${humanScore} and the computer's score was ${computerScore}`;
        console.log (`You lose, your score was ${humanScore} and the computer's score was ${computerScore}`)
      }
      if (computerScore === humanScore){
        msg.textContent = `The game is a draw. Your score was ${humanScore} and the computer's score was ${computerScore}`;
        console.log(`The game is a draw. Your score was ${humanScore} and the computer's score was ${computerScore}`)
      }
      playRound(humanChoice, getComputerChoice())
    })
  })
