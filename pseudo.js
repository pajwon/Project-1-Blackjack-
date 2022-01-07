//PseudoCode for BlackJack 

//52 card deck, make separate part of suits and value for cards
    // suits clubs diamonds hearts spades
    // value A,2,3,4,5,6,7,8,9,10,J,Q,K

//game variables like 
    // like empty dealer cards, player cards and the deck 
    // have dealer and player points equal to 0
    // need boolean values to say true or false if game is over, when a player wins and
    // when even the game starts 

//the button variables (DOM)
    // a button called from HTML for hit 
    // same thing for stay 
    // need a button to start next game 

// create a deck
    // have a place to add the cards 
    // go through each suit and value and add each card to deck 

// need to be able to shuffle deck 
    // go through the created deck 
    // use math.floor math.random with deck to get random 

// two important parts in blackjack is for the player to hit or stay
    // when clicking hit, a new card is given 
    // check if player went over 21 
    
    // when clicking stay, game is done 
    // compare to dealer who is closer to 21 

// now when game is over 
    // let dealer get to hit or stay from their original two cards 
    // then once done do a comparison 
        // if either player or dealer goes over they lose and game is over
        // then if player is higher then dealer than player wins 
        // if same then its a push/tie
        // if not dealer wins 

// some cards need number values
    // '10 J Q K' all a value of 10
    // "A" with a value of 1 or 11

// need way to get card to each player
    // from deck add to player and dealer 

// need text so add text variable using DOM not a buttom
    // write text to what dealer has and what the player has 
    // if the game is over like above on 33 
        // have text write win or lose based on outcome 

// have a place to see total of card value 
    // for example if player has 7 and 9 it says 16 
    // start off with 0 then go through from (create a deck above) card and add score
        // from each card from the value from 41
        // need a way to add Ace since it has two values 
            // based on what is in player or dealer hands 

// have scores updated for dealer and player each time they win 