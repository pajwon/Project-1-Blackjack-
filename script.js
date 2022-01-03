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
