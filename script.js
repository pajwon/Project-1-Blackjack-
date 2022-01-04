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