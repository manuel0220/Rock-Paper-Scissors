let playerScore = 0;
let computerScore = 0;
const gameArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return gameArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log(`Player's score ${playerScore}`);
    console.log("Congrats! You Won!");
  } else if (playerSelection === computerSelection) {
    console.log(`Player's score ${playerScore}`);
    console.log(`Computer score ${computerScore}`);
    console.log("No one Won!");
  } else {
    computerScore++;
    console.log(`Computer score ${computerScore}`);
    console.log("Computer won!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Please write your choice: rock, paper, scissors"
    ).toLowerCase();

    console.log(`My selection: ${playerSelection}`);

    let computerSelection = getComputerChoice();

    console.log(`Computer: ${computerSelection}`);

    playRound(playerSelection, computerSelection);
  }
}

game();

if (playerScore > computerScore) {
  console.log(`Congrats you won to the computer`);
} else if (playerScore < computerScore) {
  console.log(`You lose the computer won!`);
} else {
  console.log(`No one won`);
}
