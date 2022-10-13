function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Should get a random number between 0 & 2
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = window.prompt("Rock, Paper, or Scissors?"); // Pressing cancel causes input to be null, which means .toLowerCase() will TypeError
    if (playerChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (playerChoice.toLowerCase() === "paper") {
        return "paper";
    } else if (playerChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        return;
    }
}

/**
 * @return 0 = Computer earns 1 point
 * @return 1 = Player earns 1 point
 * @return 2 = Tie, no points earned
 */
function playGame(getComputerChoice, getPlayerChoice) {
    // Tied games
    if (getComputerChoice === getPlayerChoice) {
        return 2;
    }

    // Rock
    if (getComputerChoice === "rock" && getPlayerChoice == "paper") {
        return 1;
    } else if (getComputerChoice === "rock" && getPlayerChoice === "scissors") {
        return 0;
    } else if (getPlayerChoice === "rock" && getComputerChoice === "paper") {
        return 0;
    } else if (getPlayerChoice === "rock" && getComputerChoice === "scissors") {
        return 1;
    }

    // Paper
    if (getComputerChoice == "paper" && getPlayerChoice == "scissors") {
        return 1;
    } else if (getComputerChoice === "paper" && getPlayerChoice === "rock") {
        return 0;
    } else if (getPlayerChoice === "paper" && getComputerChoice === "scissors") {
        return 0;
    } else if (getPlayerChoice === "paper" && getComputerChoice === "rock") {
        return 1;
    }

    // Scissors
    if (getComputerChoice === "scissors" && getPlayerChoice === "rock") {
        return 1;
    } else if (getComputerChoice === "scissors" && getPlayerChoice === "paper") {
        return 0;
    } else if (getPlayerChoice === "scissors" && getComputerChoice === "rock") {
        return 0;
    } else if (getPlayerChoice === "scissors" && getComputerChoice === "paper") {
        return 1;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        console.log("Computer: " + computerChoice);
        let playerChoice = getPlayerChoice();
        console.log("Player: " + playerChoice);
        let result = playGame(computerChoice, playerChoice);
        if (result === 0) {
            computerScore++;
            console.log("Computer Score: " + computerScore);
        } else if (result === 1) {
            playerScore++;
            console.log("Player Score: " + playerScore);
        } else if (result === 2) {
            i--;
        }
    }
    if (playerScore > computerScore) {
        console.log("Player Wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer Wins!");
    } else {
        console.log("Tie Game!"); // should not be possible
    }
}

game();