const options = ["Rock", "Paper", "Scissors"]
let score = 0
let tie = 0
let computerScore = 0

function getComputerChoice (){
    const random = Math.floor(Math.random() * 3)
    return options[random]
}

function playRound(playerSelection, computerSelection){
    if (!options.includes(playerSelection)){
        alert ("Please choose between 'Rock', 'Paper', 'Scissors'")
        return
    }
    
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        score++
        return "You Win! Rocks beats Scissors"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        score++
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        score++
        return "You Win! Paper beats Rock"
    } else if (playerSelection === computerSelection) {
        tie++
        return "It's a tie!"
    } else {
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
        getPlayerChoice = prompt("What's your choice?")
        let playerChoice = getPlayerChoice[0].toUpperCase() + getPlayerChoice.slice(1).toLowerCase()
        let computerChoice = getComputerChoice()
        console.log(playRound(playerChoice, computerChoice))
        console.log(`Your score: ${score}`)
    }
    if (score > computerScore && score > tie ){
        console.log("You Win!!!!!!")
    } else {
        console.log('Sorry, you lost this one. Better luck next time.')
    }
}

game()