function playRound(humanChoice, computerChoice) {
  // your code here!
  console.log(`You chose ${humanChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose!");
  } else {
    console.log("Invalid input. Please try again.");
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: rock, paper, or scissors");
  try {
    choice = choice.toLowerCase();
  } catch (error) {
    choice = "rock";
  }
  return choice;
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

for (let index = 0; index < 5; index++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
