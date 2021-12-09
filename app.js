console.log('What are you buyin\', what are you sellin\'')

// Declaring all global variables now because I'm cool like that
let userChoice // sourced from clicking the div chosen in the HTML page
let computerChoice

// track who won the previous game and what they played for use in the computer logic
let whoWon = 'draw'
let userPlayed 
let computerPlayed

// init variables for the win/loss counter
let playerCounter = 0
let computerCounter = 0

// when the player wins, computer plays what would beat the winning move
const userWon = () => {
    return userPlayed = 'rogue' ?
    'warrior' :
    userPlayed = 'warrior' ?
    'mage' :
    'rogue' ;
}

// when the computer wins, computer plays what would have beat the winning move
const computerWon = () => {
    return computerPlayed = 'rogue' ?
    'warrior' :
    computerPlayed = 'warrior' ?
    'mage' :
    'rogue' ;
}

const randomChoice = () => {
    const choices = [ 'rogue', 'warrior', 'mage' ]
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

// Calling the different logic routines for each win state
const generateComputerChoice = () => { 
    return whoWon = 'draw' ?
    randomChoice() :
    whoWon = 'player' ?
    userWon() :
    computerWon() ;

}


// There's probably a better way to do this than a switch case but...
const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'warriorrogue':
        case 'magewarrior':
        case 'roguemage':
            resultDisplay.innerHTML = "Player wins!"
            whoWon = 'player'
            playerCounter++
            document.getElementById('playerCounter').innerText = playerCounter
            break
        case 'roguewarrior':
        case 'warriormage':
        case 'magerogue':
            resultDisplay.innerHTML = "Computer wins!"
            whoWon = 'computer'
            computerCounter++
            document.getElementById('computerCounter').innerText = computerCounter
            break
        case 'warriorwarrior':
        case 'magemage':
        case 'roguerogue':
            resultDisplay.innerHTML = "It was a draw"
            whoWon = 'draw'
            break
    }
}

// Finally the actionable from user sets the whole thing in motion
const handleClick = (e) => {
    userChoice = e
    userChoiceDisplay.innerText = userChoice
    generateComputerChoice()
    computerChoiceDisplay.innerText = computerChoice
    userPlayed = userChoice
    computerPlayed = computerChoice
    getResult()
}


const resetMe = () => {
    window.location.reload()
    return false
}