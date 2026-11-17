function computerChoice() {
  let num = Math.random();
  let value;

  if (num <= 0.33) {
    value = "Rock"
  } else if (num <= 0.66) {
    value = "Paper"
  } else {
    value = "Scissors"
  }
  return value;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?", " ")
  choice = choice.charAt(0).toUpperCase() + choice.toLowerCase().slice(1)
  return choice
}


function playGame() {

  let humanScore = 0
  let computerScore = 0

function playRound(hS, cS) {

  if (
    (hS == "Rock" && cS == "Scissors") ||
    (hS == "Scissors" && cS == "Paper") ||
    (hS == "Paper" && cS == "Rock")
  ) {
    console.log("You won! " + hS + " beats " + cS)
    humanScore++;
  } else if (hS == cS) {
    console.log("It's a tie! You both picked " + hS)
  } else {
    console.log("You lost! " + cS + " beats " + hS)
    computerScore++;
  }


}

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

}


console.log(playGame())
