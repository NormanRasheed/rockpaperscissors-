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

  function getHumanChoice () {
    playerChoice = prompt("Rock, Paper or Scissors?");
    return playerChoice;
  }

  // let humanSelection = getHumanChoice();
  // let computerSelection = getComputerChoice();

  function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
      humanChoice = getHumanChoice();
      humanChoice = humanChoice.toLowerCase();
      computerChoice = getComputerChoice();
      //Draws
      if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a draw");
      }
      if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a draw");
      }
      if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a draw");
        }
      //Player Wins
      if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
      }
      if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
      }
      if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log(`You win ${humanChoice} beats ${computerChoice}`);
      }
      //Player loses
      if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
      }
      if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
      }
      if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log(`You lose ${computerChoice} beats ${humanChoice}`);
      }
    }

      playRound();
      playRound();
      playRound();
      playRound();
      playRound();

      if (humanScore > computerScore) {
        console.log (`You win with ${humanScore} points`)
      } else if (computerScore > humanScore) {
        console.log (`You lose, your score was ${humanScore} and the computer's score was     ${computerScore}`)
      } else {
        console.log(`The game is a draw. Your score was ${humanScore} and the computer's score was ${computerScore}`)
      }
  }

  playGame();
