"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Blackjack = void 0;
var Card_1 = require("./Card");
var ReadlineSync_1 = require("./ReadlineSync");
var Blackjack = /** @class */ (function (_super) {
    __extends(Blackjack, _super);
    function Blackjack() {
        var _this = _super.call(this) || this;
        _this.bet = 0;
        _this.cardDeck = [];
        _this.playerCards = [];
        _this.playerTotalCardsValue = 0;
        _this.playerStands = false;
        _this.playerBusts = false;
        _this.playerHaveWon = false;
        _this.playerHaveLost = false;
        _this.dealerCards = [];
        _this.dealerTotalCardsValue = 0;
        _this.dealerStands = false;
        _this.dealerBusts = false;
        return _this;
    }
    Blackjack.prototype.namePresentation = function () {
        // the name of the game is displayed
        console.log("\n" + "---> Blackjack <---");
    };
    Blackjack.prototype.generateCards = function () {
        /* the 52 cards are generated */
        // array with the 4 suits of the French-suited cards
        var suits = ["clubs", "diamonds", "hearts", "spades"];
        // array with the 2 possible colors for the cards
        var colors = ["black", "red"];
        var cardColor;
        // array with the 13 ranks per suit
        var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        // array with the in-game numerical value per rank
        var ranksInGameValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        for (var suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
            var inGameValueIndex = 0;
            if (suitsIndex === 0 || suitsIndex === 3) {
                cardColor = colors[0];
            }
            else {
                cardColor = colors[1];
            }
            for (var ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
                var card = new Card_1.Card(suits[suitsIndex], ranks[ranksIndex], cardColor, ranksInGameValues[inGameValueIndex]);
                this.cardDeck.push(card);
                inGameValueIndex++;
            }
        }
    };
    Blackjack.prototype.shuffleTheCards = function () {
        // the cards are shuffled several times
        for (var i = 0; i < 100; i++) {
            this.cardDeck.sort(function () { return Math.random() - 0.5; });
        }
    };
    Blackjack.prototype.playerChooseACardValue = function () {
        if (this.cardDeck[0].getRank() === "A") {
            var inputNumber = Number(this.rls.question("\n" + "(!) The card you have taken is an A, so you can choose if the value of this card will be 1 or 11." + "\n" + "Select one option:" + "\n" + "[1] In-Game Value = 1" + "\n" + "[2] In-Game Value = 11" + "\n" + "\n" + "Your selection is: "));
            switch (inputNumber) {
                case 1:
                    this.cardDeck[0].setInGameValue(1);
                    console.log("\n" + "The value of this A card is now " + this.cardDeck[0].getInGameValue() + ".");
                    break;
                case 2:
                    console.log("\n" + "The value of this A card is now " + this.cardDeck[0].getInGameValue() + ".");
                    break;
                default:
                    console.log("\n" + "Please enter a valid number.");
                    this.playerChooseACardValue();
                    break;
            }
        }
    };
    Blackjack.prototype.hit = function (whoHasTheTurn) {
        // console.log("\n"+"Card deck before: "+this.cardDeck.length+" cards"+"\n");
        // console.log(this.cardDeck);
        // method to take a card
        switch (whoHasTheTurn) {
            case this.playerCards:
                // console.log("\n"+"<> Player's turn <>");
                console.log("\n" + "* The player has taken a card *");
                break;
            case this.dealerCards:
                // console.log("\n"+"<> Dealer's turn <>");
                console.log("\n" + "* The dealer has taken a card *");
                break;
        }
        // if the player recieves an "A", he will choose if
        // the value of the card will be 11 or 1
        if (whoHasTheTurn === this.playerCards) {
            this.playerChooseACardValue();
        }
        whoHasTheTurn.push(this.cardDeck[0]);
        this.cardDeck.shift();
        switch (whoHasTheTurn) {
            case this.playerCards:
                if (whoHasTheTurn.length === 1) {
                    console.log("\n" + "Player now has " + whoHasTheTurn.length + " card:" + "\n");
                }
                else {
                    console.log("\n" + "Player now has " + whoHasTheTurn.length + " cards:" + "\n");
                }
                break;
            case this.dealerCards:
                if (whoHasTheTurn.length === 1) {
                    console.log("\n" + "Dealer now has " + whoHasTheTurn.length + " card:" + "\n");
                }
                else {
                    console.log("\n" + "Dealer now has " + whoHasTheTurn.length + " cards:" + "\n");
                }
                break;
        }
        // console.log(whoHasTheTurn);
        // console.log("\n"+"Card deck after hit: "+this.cardDeck.length+" cards"+"\n");
        // console.log(this.cardDeck);
    };
    Blackjack.prototype.stand = function (whoHasTheTurn) {
        // stand with your cards
        switch (whoHasTheTurn) {
            case this.playerCards:
                console.log("\n" + "Player stands with his cards.");
                this.playerStands = true;
                break;
            case this.dealerCards:
                console.log("\n" + "Dealer stands with his cards.");
                this.dealerStands = true;
                break;
            default:
                break;
        }
    };
    Blackjack.prototype.showCards = function (whoHasTheTurn) {
        for (var i = 0; i < whoHasTheTurn.length; i++) {
            console.log(whoHasTheTurn[i].toString());
        }
    };
    Blackjack.prototype.dealerShowsFirstCard = function () {
        console.log("The dealer shows his first card:");
        console.log("\n" + this.dealerCards[0].toString());
    };
    Blackjack.prototype.checkTotalCardsValue = function (whoHasTheTurn) {
        var totalCardsValue = 0;
        for (var i = 0; i < whoHasTheTurn.length; i++) {
            totalCardsValue += whoHasTheTurn[i].getInGameValue();
        }
        switch (whoHasTheTurn) {
            case this.playerCards:
                this.playerTotalCardsValue = totalCardsValue;
                // check for bust
                if (totalCardsValue > 21) {
                    console.log("\n" + "The player busted.");
                    this.playerLost();
                    this.playerBusts = true;
                }
                // check for Blackjack
                if (whoHasTheTurn.length === 2 && totalCardsValue === 21 && this.dealerCards[0].getInGameValue() !== 11 && this.dealerCards[0].getInGameValue() !== 10) {
                    // check if the dealer has the chance to get a Blackjack
                    // if he does, the game continues
                    // but if not, the player wins instantly
                    console.log("\n" + "¡Blackjack for the player!");
                    this.playerWon();
                }
                break;
            case this.dealerCards:
                this.dealerTotalCardsValue = totalCardsValue;
                // if the dealer's total card value is <= 16, he must hit
                if (totalCardsValue <= 16) {
                    this.hit(this.dealerCards);
                    this.showCards(this.dealerCards);
                }
                // if the dealer's total card value is >= 17, he must stand
                else if (totalCardsValue > 16 && totalCardsValue < 22) {
                    if (whoHasTheTurn.length === 2 && totalCardsValue === 21 && this.playerCards[0].getInGameValue() !== 11 && this.playerCards[0].getInGameValue() !== 10) {
                        // check if the dealer got a Blackjack
                        // if he does, the player loses instantly
                        // but if not, the dealer will stand
                        console.log("\n" + "¡Blackjack for the dealer!");
                        this.playerLost();
                    }
                    else {
                        this.stand(this.dealerCards);
                    }
                }
                // check for bust
                else {
                    console.log("\n" + "The dealer busted.");
                    this.playerWon();
                    this.dealerBusts = true;
                }
                if (this.dealerBusts === false && this.dealerStands === false && this.playerHaveLost === false) {
                    this.checkTotalCardsValue(this.dealerCards);
                }
                break;
            default:
                break;
        }
    };
    Blackjack.prototype.playerChooseHitOrStand = function () {
        var inputNumber = Number(this.rls.question("\n" + "Select one option:" + "\n" + "[1] Hit" + "\n" + "[2] Stand" + "\n" + "\n" + "Your selection is: "));
        switch (inputNumber) {
            case 1:
                this.hit(this.playerCards);
                this.showCards(this.playerCards);
                this.checkTotalCardsValue(this.playerCards);
                // if the player don't bust or stand, he will continue playing
                if (this.playerBusts === false && this.playerStands === false) {
                    this.playerChooseHitOrStand();
                }
                break;
            case 2:
                this.stand(this.playerCards);
                break;
            default:
                console.log("\n" + "Please enter a valid number.");
                this.playerChooseHitOrStand();
                break;
        }
    };
    Blackjack.prototype.checkCardsAndAssignWinner = function () {
        console.log("\n" + "* The value of the player's cards is " + this.playerTotalCardsValue + " *");
        console.log("* The value of the dealer's cards is " + this.dealerTotalCardsValue + " *");
        if (this.playerTotalCardsValue === this.dealerTotalCardsValue) {
            console.log("\n" + "It's draw. Nobody wins or loses.");
            this.draw();
        }
        else if (this.playerTotalCardsValue < this.dealerTotalCardsValue) {
            this.playerLost();
        }
        else {
            this.playerWon();
        }
    };
    Blackjack.prototype.draw = function () {
        console.log("\n" + "¡Player push!");
    };
    Blackjack.prototype.playerWon = function () {
        console.log("\n" + "¡Player won!");
        this.playerHaveWon = true;
    };
    Blackjack.prototype.playerLost = function () {
        console.log("\n" + "¡Player lost!");
        this.playerHaveLost = true;
    };
    Blackjack.prototype.requestBet = function () {
        // the bet is requested
        var bet = Number(this.rls.question("\n" + "Enter your bet: "));
        if (!Number.isInteger(bet)) {
            console.log("\n" + "You are only allowed to bet integer amounts.");
            return this.requestBet();
        }
        if (bet <= 0 || bet > 10000) {
            console.log("\n" + "This game topic only allows you to bet up to 10000 usd. Try again.");
            return this.requestBet();
        }
        else {
            this.bet = bet;
        }
    };
    Blackjack.prototype.play = function () {
        this.namePresentation();
        this.generateCards();
        this.shuffleTheCards();
        this.requestBet();
        // when the game starts both the player and the dealer
        // must receive the first two cards.
        // that means they must hit (pick a card) two times
        // before they start choosing whether or not to stand.
        console.log("\n" + "<> Player's turn <>");
        this.hit(this.playerCards);
        this.showCards(this.playerCards);
        console.log("\n" + "<> Dealer's turn <>");
        this.hit(this.dealerCards);
        console.log("* The dealer will show his first card on his next turn *");
        console.log("\n" + "<> Player's turn <>");
        this.hit(this.playerCards);
        this.showCards(this.playerCards);
        console.log("\n" + "<> Dealer's turn <>");
        this.hit(this.dealerCards);
        this.dealerShowsFirstCard();
        // check if player got a blackjack
        this.checkTotalCardsValue(this.playerCards);
        if (this.playerHaveWon === false) {
            console.log("\n" + "<> Player's turn <>");
            this.playerChooseHitOrStand();
            if (this.playerHaveLost === false) {
                console.log("\n" + "<> Dealer's turn <>");
                console.log("\n" + "The dealer shows his cards:" + "\n");
                this.showCards(this.dealerCards);
                this.checkTotalCardsValue(this.dealerCards);
                if (this.playerHaveWon === false) {
                    this.checkCardsAndAssignWinner();
                }
            }
        }
        // bust se le dice cuando se pasan de 21, se elige ganador y termina el juego
        // stand termina el turno de la persona que lo hace
        // se le llama push al empate
        // si empatan el jugador no genera ganancias pero mantiene el dinero apostado
        // the house wins
        // fix the A card always having a 11 value for dealer 
    };
    return Blackjack;
}(ReadlineSync_1.ReadlineSync));
exports.Blackjack = Blackjack;
