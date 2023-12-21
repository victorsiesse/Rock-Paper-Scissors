const selectPlayerName = (playerName) =>  {
  return playerName;
}

const selectRoundNumber = (num) => {
  return num;
}

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('error in the input');
  }
}

const getComputerChoice = () => {
  switch (Math.floor(Math.random()*3)) {
    case 0 : 
      return 'paper';
    case 1 : 
      return 'rock';
    case 2 :
      return 'scissors' 
  }
}

const determineWinner = (userOneChoice, userTwoChoice) => {
  console.log(userOneChoice, userTwoChoice)
  if( userOneChoice === userTwoChoice) {
    return 
  } else if ( userOneChoice === 'paper') {
    return userTwoChoice === 'rock' ? 1 : 0;
  } else if (userOneChoice === 'rock') {
    return userTwoChoice === 'scissors' ? 1 : 0;
  } else if (userOneChoice === 'scissors') {
    return userTwoChoice === 'paper' ? 1 : 0;
    }
}

function playGame(round ) {
  let userOneScore = 0;
  let userTwoScore = 0;
  while ((userOneScore < round) && (userTwoScore< round)) { 
    let winner = determineWinner(getUserChoice('rock'), getComputerChoice())
     if (winner === 1) {
      userOneScore++;
    } else if (winner === 0) { 
      userTwoScore++;
    }
    console.log(userOneScore, userTwoScore)
  }
  if (userOneScore === round) {
    return 1;
  } else {
    return 0;
  }
}

function playerVsComputer() {
  const playerOneName = selectPlayerName('Victor');
  const numOfRound = selectRoundNumber(5);
  playGame(numOfRound) ? console.log("player win") : console.log('computer win')
}

function playerVsPlayer() {
  const playerOneName = selectPlayerName('Victor');
  const playerTwoName = selectPlayerName('Jules');
  const numOfROund = selectRoundNumber(5);
}

function computerVsComputer () {
  const numOfRound = selectRoundNumber(5);
  playGame(numOfRound) ? console.log("AI1 win") : console.log('AI2 win')
}

function startGame() {
  let gameMode = 2;
  switch (gameMode) {
    case 0: // Player vs IA
    playerVsComputer()
    break
      
    case 1: // Player vs Player
     
    case 2: // IA vs IA
    computerVsComputer();
    break
  }
} 

/*
Logic 

Premiere page, choix du mode 
si joueur, choisir un nom pour chaque joueurs
si pas de joueurs, pas de selection de nom, mais quand même choix du nb de manche
ensuite choix du nombre de manche pour gagner la partie, 
lancement de la partie.
Possible de relancer ou de quitter a n'importe quelle moment

*/

/* 
Mode 0, Player vs IA 
mode 1, PvP
mode 2, Ia, IA
*/ 