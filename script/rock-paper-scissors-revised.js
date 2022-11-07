/**
 * Helper function desgined to randomly generate a number, and correspond a move {"rock, "paper", or "scissors"} to it
 */
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

