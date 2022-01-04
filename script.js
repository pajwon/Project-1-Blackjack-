//Suits and numbers
let suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs']
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ]

//create buttons from ids in index.html
let startGameButton = document.querySelector('#start-game')

let hitButton = document.querySelector('#hit')

let stayButton = document.querySelector('#stay')

//game variables 
let startGame = false
let gameOver = false
let gamblerWon = false
let gamblerHand = []
let dealerHand = []
let deck = []

//had to add a total for each person to see how close they are to 21
let gamblerTotal = 0
let dealerTotal = 0


//in html just want to show start game not hit and stay yet 
hitButton.style.display = 'none'
stayButton.style.display = 'none'

//making a deck using two for loops
function makeDeck() {
    let deck = []
    for (let i = 0; i < suits.length; i++) {
        for (let n = 0; n < numbers.length; n++) {
            //this makes one card with random suit and number so make card variable
            let card = {
                suit: suits[i],
                number: numbers[n]
            }
            //add the card to deck 
            deck.push(card);
        }
    }
    return deck
}
// check console to see if you made 52 cards, it worked! but in order
// console.log(makeDeck()) 


// deck = makeDeck()
//need deck in random order, need it shuffled 
function shuffledDeck(deck) {
    for (let i=0; i<deck.length; i++) {
        let random = Math.floor(Math.random() * deck.length)
        let shuffled = deck[random]
        deck[random] = deck[i]
        deck[i] = shuffled  

        //using console.log to check if deck is shuffled
        // console.log(shuffled)
    }
}
// invoking to see console.log of shuffled, it is random
// shuffledDeck(deck)

//need function to get a card from top of the deck
    //to later add for hit and for hands of each person
function getCard() {
    return deck.shift()
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

//a function for comparing results to see who won 
function whoWins () {

    if (gameOver) {
        while (dealerTotal < gamblerTotal && gamblerTotal <= 21 && dealerTotal <= 21) {
            dealerHand.push(getCard())

        }
    }
    if (gamblerTotal > 21) {
        gamblerWon = false
        gameOver = true
    } else if (dealerTotal > 21) {
        gamblerWon = true
        gameOver = true
    } else if (gameOver) {
        if (gamblerTotal > dealerTotal) {
            gamblerWon = true
        } else {
            gamblerWon = false
        }
    }
}

//event listeners first for starting the game 
    //use the three boolean values from beginning 

startGameButton.addEventListener('click', () => {
    startGame = true 
    gameOver = false
    gamblerWon = false 

    deck = makeDeck()
    shuffledDeck(deck)

    dealerHand = [getCard(), getCard()]
    gamblerHand = [getCard(), getCard()]

    startGameButton.style.display = 'none'
    hitButton.style.display = 'inline'
    stayButton.style.display = 'inline'
    blackjackTable()
})

//for hit and stay need add whowins function to check each others hand 
    // need a function also to add to hit and stay to have text for now for what 
    // each person actually has like Dealer hand is A Diamonds and J Clubs and to say 
    // the total of which will be 21 
hitButton.addEventListener('click', () => {
    gamblerHand.push(getCard())
    whoWins()
    blackjackTable()
})
    
stayButton.addEventListener('click', () => {
    gameOver = true
    whoWins()
    blackjackTable()
})


function eachCard(card) {
    return `${card.number} ${card.suit}`
}

//created function table to add text 
    // instead of writing it in index html all the writing 
    // will an id to a <p> tag to add everything else on js 

let gameText = document.querySelector('game-text')
function blackjackTable () {
    if (startGame === false) {
        gameText.innerText = 'BLACKJACK'
        return;
    }
    //made a loop for dealer hand to have what the two cards dealer has 
    // will have to add text later to gameText 
    let dealerString = ''
    for (let i = 0; i < dealerHand.length; i++) {
        dealerString += eachCard(dealerHand[i])
    }
    //do same thing for gambler
    let gamblerString = ''
    for (let j = 0; j < gamblerHand.length; i++) {
        gamblerString += eachCard(gamblerHand[j])
    }

    
}