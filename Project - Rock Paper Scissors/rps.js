function playRound(humanChoice, computerChoice) {
  console.log(`You chose ${humanChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win!");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win!");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose!");
  } else {
    console.log("Invalid input. Please try again.");
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: rock, paper, or scissors");
  if (choice == "") {
    choice = "rock";
  }
  try {
    choice = choice.toLowerCase();
  } catch (error) {
    choice = "rock";
  }
  return choice;
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)]; // get random index 0, 1, 2
  return choice;
}

let humanScore = 0;
let computerScore = 0;

for (let index = 0; index < 5; index++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

console.log(`Your score is ${humanScore}`);
console.log(`Computer score is ${computerScore}`);

if (humanScore === computerScore) {
  console.log("It's a tie!");
} else if (humanScore > computerScore) {
  console.log("You win the game!");
} else if (humanScore < computerScore) {
  console.log("You lose the game!");
}
