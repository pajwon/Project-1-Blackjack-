//Suits and numbers
let suits = ['♦', '♥', '♠', '♣']
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]

//game variables 
let startGame = false
let gameIsDone = false
let gamblerWon = false
let gamblerHand = []
let dealerHand = []
let deck = []

//create buttons from ids in index.html
let startGameButton = document.querySelector('#start-game')
let hitButton = document.querySelector('#hit')
let stayButton = document.querySelector('#stay')

//create audio for music and clicking sound for buttons
let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')
let audio2 = new Audio('https://www.chosic.com/wp-content/uploads/2020/05/Study-and-Relax.mp3')

//in html just want to show start game not hit and stay yet 
hitButton.style.display = 'none'
stayButton.style.display = 'none'

//making a deck using two for loops
function makeDeck() {
    let deck = []
    for (let i = 0; i < suits.length; i++) {
        for (let n = 0; n < numbers.length; n++) {
            let card = {
                suit: suits[i],
                number: numbers[n]
            } 
            deck.push(card);
        }
    }
    return deck
}

// creating conditional for each number to give an actual numeric value 
function cardValue(card) {
    if (card.number === 'A') {
        return 1;
    } else if (card.number === '2') {
        return 2;
    } else if (card.number === '3') {
        return 3;
    } else if (card.number === '4') {
        return 4;
    } else if (card.number === '5') {
        return 5;
    } else if (card.number === '6') {
        return 6;
    } else if (card.number === '7') {
        return 7;
    } else if (card.number === '8') {
        return 8;
    } else if (card.number === '9') {
        return 9;
    } else {
        return 10;
    }
}

//need deck in random order, need it shuffled 
function deckShuffling(deck) {
    for (let i=0; i<deck.length; i++) {
        let random = Math.floor(Math.random() * deck.length)
        let shuffled = deck[random]
        deck[random] = deck[i]
        deck[i] = shuffled  
    }
}

//need function to get a card from top of the deck
function getCard() {
    return deck.shift()
}

//had to add a total for each person to see how close they are to 21
let gamblerTotal = 0
let dealerTotal = 0

//a function for comparing results to see who won 
function whoWins () {
    reviseTotal()
    if (gameIsDone) {
        while (dealerTotal < gamblerTotal && gamblerTotal <= 21 && dealerTotal <= 21) {
            dealerHand.push(getCard())
            reviseTotal()
        }
    }
    if (gamblerTotal > 21) {
        gamblerWon = false
        gameIsDone = true
    } else if (dealerTotal > 21) {
        gamblerWon = true
        gameIsDone = true
    } else if (gameIsDone) {
        if (gamblerTotal > dealerTotal) {
            gamblerWon = true
        } else {
            gamblerWon = false
        }
    }
}

//event listeners first for starting the game 
startGameButton.addEventListener('click', () => {
    startGame = true 
    gameIsDone = false
    gamblerWon = false 

    deck = makeDeck()
    deckShuffling(deck)

    dealerHand = [getCard(), getCard()]
    gamblerHand = [getCard(), getCard()]

    startGameButton.style.display = 'none'
    hitButton.style.display = 'inline'
    stayButton.style.display = 'inline'

    blackjackTable()

    audio.load();
    audio.play();

    audio2.play();
})

//function to find total of hand if there is an Ace
function theTotal(cardArray) {
    let total = 0 
    let anAce = false
    for (let i=0; i < cardArray.length; i++) {
        let card = cardArray[i]
        total += cardValue(card)
        if (card.number === "A") {
            anAce = true
        }
    }
    if (anAce && total + 10 <= 21) {
        return total + 10
    }
    return total
}

//function for each persons total 
function reviseTotal () {
    dealerTotal = theTotal(dealerHand)
    gamblerTotal = theTotal(gamblerHand)
}

//function for what each card has includes
function eachCard(card) {
    return `${card.number} ${card.suit}`
}

//created function table to add text of the game
let gameText = document.querySelector('#game-text')
function blackjackTable () {
    if (startGame === false) {
        gameText.innerText = 'BLACKJACK'
        return;
    }

    let dealerString = ''
    for (let i = 0; i < dealerHand.length; i++) {
        dealerString += eachCard(dealerHand[i]) + "\n"
    }

    let gamblerString = ''
    for (let j = 0; j < gamblerHand.length; j++) {
        gamblerString += eachCard(gamblerHand[j]) + "\n"
    }

    reviseTotal()

    gameText.innerText = "\nDealer's hand is \n " + dealerString + ' Total: ' + dealerTotal + '\n\n\n\n\n\n\n Gambler hand is \n' + gamblerString + ' Total: ' + gamblerTotal + "\n"

    if(gameIsDone) {
        if (gamblerWon) {
            textOne = ["WINNER", "Nice Hand", "Great Job Beating the House"]
            gameText.innerText += textOne[Math.floor(Math.random() * textOne.length)]
        } else {
            textTwo = ["The House Always WINS", "Better Luck Next Time", "You Sure Are Good At Losing"]
            gameText.innerText += textTwo[Math.floor(Math.random() * textTwo.length)]
        }

        startGameButton.style.display = 'inline'
        hitButton.style.display = 'none'
        stayButton.style.display = 'none'

    }
}

//event listener for hit button
hitButton.addEventListener('click', () => {
    gamblerHand.push(getCard())
    whoWins()
    blackjackTable()
    audio.load();
    audio.play()
})
    
//event listener for stay button
stayButton.addEventListener('click', () => {
    gameIsDone = true
    whoWins()
    blackjackTable()
    audio.load();
    audio.play()
})