function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) // Should get a random number between 0 & 2
    if (randomNumber === 0) {
        return "Rock"
    } else if (randomNumber === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playerSelection() {
    prompt("Rock, Paper, or Scissors?")
}

function playGame(getComputerChoice, playerSelection) {

}
