function computerChoice() {
  let num = Math.random();
  let value;

  if (num <= 0.33) {
    value = "rock"
  } else if (num <= 0.66) {
    value = "paper"
  } else {
    value = "scissors"
  }
  return value;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?", " ")
  choice = choice.toLowerCase()
  return choice
}


function playGame() {

  let humanScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1));
    const hS = getHumanChoice()
    const cS = computerChoice()
    playRound(hS, cS);
    console.log("Your score: " + humanScore + " Computer Score " + computerScore);
    console.log(" ");
  }
  
  if (humanScore > computerScore) {
    return "You win!"
  } else if (computerScore > humanScore) {
    return "You lose!"
  } else {
    return "It's a draw!"
  }

function playRound(hS, cS) {


  if (hS == "scissors" && cS == "paper") {
    console.log("You win! Scissors beat Paper!")
    humanScore = humanScore + 1
  } else if (hS == "rock" && cS == "scissors") {
    console.log("You win! Rock beats Scissors!")
    humanScore = humanScore + 1
  } else if (hS == "paper" && cS == "rock") {
    console.log("You win Paper beats Rock!")
    humanScore = humanScore + 1
  } else if (hS == cS) {
    console.log("It's a draw! You both chose " + hS + "!")
  } else if (hS == "rock" && cS == "paper") {
    console.log("You lose! Paper beats Rock!")
    computerScore = computerScore + 1
  } else if (hS == "paper" && cS == "scissors") {
    console.log("You lose! Scissors beat Paper!")
    computerScore = computerScore + 1
  } else if (hS == "scissors" && cS == "rock") {
    console.log("You lose! Rock beats Scissors!")
    computerScore = computerScore + 1
  }
}

}


console.log(playGame())
