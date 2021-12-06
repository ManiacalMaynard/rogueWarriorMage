console.log('What are you buyin\', what are you sellin\'')
const userChoiceDisplay = document.createElement('h3')
const computerChoiceDisplay = document.createElement('h3')
const resultDisplay = document.createElement('h2')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = [ 'rogue', 'warrior', 'mage']
let userChoice
let computerChoice

let whoWon
let userPlayed
let computerPlayed

const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'You chose: ' + userChoice
    userPlayed = userChoice
    generateComputerChoice()
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoiceDisplay.innerHTML = 'I choose: ' + randomChoice
    computerChoice = randomChoice
}

for (let i=0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

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
            resultDisplay.innerHTML = "A draw"
            whoWon = 'draw'
            break
    }
}


// Record the user input


// Generate the computer's response

/* ~~~~ My goal for the computer's response logic: ~~~~
 if you lose the first round, switch to the thing that beats the thing your opponent just played. If you win, don't keep playing the same thing, but instead switch to the thing that would beat the thing that you just played. In other words, play the hand your losing opponent just played. To wit: you win a round with rock against someone else's scissors. They are about to switch to paper. You should switch to scissors */


 // Compare the responses & determine winner


 // Record the results