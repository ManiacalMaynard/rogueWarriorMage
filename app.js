console.log('What are you buyin\', what are you sellin\'')

const choices = [ 'rogue', 'warrior', 'mage' ]
let userChoice
let computerChoice

let whoWon
let userPlayed 
let computerPlayed

const generateComputerChoice = () => { 
    if (whoWon = 'user') {
        userWon()
    } else if (whoWon = 'computer') {
        computerWon()
    } else {
        randomChoice()
    }
}


const randomChoice = () => {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

const userWon = () => {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

const computerWon = () => {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}


const handleClick = (e) => {
    userChoice = e
    userChoiceDisplay.innerText = userChoice
    generateComputerChoice()
    computerChoiceDisplay.innerText = computerChoice
    userPlayed = userChoice
    getResult()
}

// There's probably a better way to do this than a switch case but...
const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'warriorrogue':
        case 'magewarrior':
        case 'roguemage':
            resultDisplay.innerHTML = "You have won"
            whoWon = 'player'
            break
        case 'roguewarrior':
        case 'warriormage':
        case 'magerogue':
            resultDisplay.innerHTML = "I have won"
            whoWon = 'computer'
            break
        case 'warriorwarrior':
        case 'magemage':
        case 'roguerogue':
            resultDisplay.innerHTML = "It was a draw"
            whoWon = 'draw'
            break
    }
}





