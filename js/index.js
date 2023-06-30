const rockEl = document.querySelector("#rock");
const paperEl = document.querySelector("#paper");
const scissorsEl = document.querySelector("#scissors");
const playingText = document.querySelector("#playing-text");
const playerScoreEl = document.querySelector("#player-score");
const computerScoreEl = document.querySelector("#computer-score");
const modalEl = document.querySelector("#modal");
const modalTextEl = document.querySelector("#modal-text");
const modalBtnEl = document.querySelector("#modal-btn");
const gameBoardEl = document.querySelector('.game-board')


const displayGameBoard = setTimeout(()=>{
    gameBoardEl.classList.remove('hidden')
}, 15000)

const options = ["Rock", "Paper", "Scissors"];
let score = 0;
let tie = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  return options[random];
}

function playSound(sound){
    let beat = new Audio (`audio/${sound}.mp3`);
    beat.play();
}

let playerChoice = "";

rockEl.addEventListener("click", () => {
  playerChoice = options[0];
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playSound('rock')
  decision();
});

paperEl.addEventListener("click", () => {
  playerChoice = options[1];
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playSound('paper');
  decision();
});

scissorsEl.addEventListener("click", () => {
  playerChoice = options[2];
  const computerChoice = getComputerChoice();
  playRound(playerChoice, computerChoice);
  playSound('scissors');
  decision();
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
      score++;
      playerScoreEl.textContent = score;
      playerTextModalities(playerSelection, computerSelection);
    } else if (
      playerSelection === "Scissors" &&
      computerSelection === "Paper"
    ) {
      score++;
      playerScoreEl.textContent = score;
      playerTextModalities(playerSelection, computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      score++;
      playerScoreEl.textContent = score;
      playerTextModalities(playerSelection, computerSelection);
    } else if (playerSelection === computerSelection) {
      tie++;
      playingText.textContent = "It's a tie!";
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      computerTextModalities(playerSelection, computerSelection);
    }
  }
}

function decision() {
  if (score === 5 || computerScore === 5) {
    modalEl.classList.remove("hidden");
    modalTextEl.textContent =
      score === 5
        ? "Victory!!! Mankind will live another day thanks to your bravery!!! 😃"
        : "Defeat! what shall be the fate of mankind now? 😢";
  }
}

modalBtnEl.addEventListener("click", () => {
  modalEl.classList.add("hidden");
  score = 0;
  computerScore = 0;
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  playingText.textContent = 'Let the games begin!'
});

function playerTextModalities(playerChoice, computerChoice) {
  if (score === 1) {
    playingText.textContent = `Nice one 👍🏼 ${playerChoice} beats ${computerChoice}!`;
  } else if (score === 2) {
    playingText.textContent = `That was a good one 😇 ${playerChoice} beats ${computerChoice}!`;
  } else if (score === 3) {
    playingText.textContent = `Way to go!!!😃 ${playerChoice} beats ${computerChoice}!`;
  } else if (score === 4) {
    playingText.textContent = `Man's future is looking bright😎 ${playerChoice} beats ${computerChoice}!`;
  }
}
function computerTextModalities(playerChoice, computerChoice) {
  if (computerScore === 1) {
    playingText.textContent = `Lost this one 😕 ${computerChoice} beats ${playerChoice}!`;
  } else if (computerScore === 2) {
    playingText.textContent = `Lost this one 😕 ${computerChoice} beats ${playerChoice}!`;
  } else if (computerScore === 3) {
    playingText.textContent = `One more for the machines😢 ${computerChoice} beats ${playerChoice}!`;
  } else if (computerScore === 4) {
    playingText.textContent = `Oh no are the machines going to take over again?😱 ${computerChoice} beats ${playerChoice}!`;
  }
}
