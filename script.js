//This function make the computer automatic choose, with .random
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    }
    return 'You lose!';
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(result);
}

function game() {
    const playerChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (['rock', 'paper', 'scissors'].includes(playerChoice)) {
        playRound(playerChoice);
    } else {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
    }
}

// Start the game
game();


