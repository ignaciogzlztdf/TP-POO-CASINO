"use strict";
exports.__esModule = true;
exports.Blackjack = void 0;
var Card_1 = require("./Card");
var Blackjack = /** @class */ (function () {
    function Blackjack() {
        this.cards = [];
    }
    Blackjack.prototype.generateCards = function () {
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
                this.cards.push(card);
                inGameValueIndex++;
            }
        }
        console.log(this.cards);
    };
    Blackjack.prototype.play = function () {
        // the cards are generated
        this.generateCards();
    };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
