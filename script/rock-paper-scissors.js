function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) // Should get a random number between 0 & 2
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playerSelection() {
    let playerChoice = window.prompt("Rock, Paper, or Scissors?")
    return playerChoice.toLowerCase()
}

function playGame(getComputerChoice, playerSelection) {
    
}