"use strict";
exports.__esModule = true;
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(suit, rank, color, inGameValue) {
        this.suit = suit;
        this.rank = rank;
        this.color = color;
        this.inGameValue = inGameValue;
    }
    // getters & setters
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.setSuit = function (paramSuit) {
        this.suit = paramSuit;
    };
    Card.prototype.getColor = function () {
        return this.color;
    };
    Card.prototype.setColor = function (paramColor) {
        this.color = paramColor;
    };
    Card.prototype.getRank = function () {
        return this.rank;
    };
    Card.prototype.setRank = function (paramRank) {
        this.rank = paramRank;
    };
    Card.prototype.getInGameValue = function () {
        return this.inGameValue;
    };
    Card.prototype.setInGameValue = function (paramInGameValue) {
        this.inGameValue = paramInGameValue;
    };
    Card.prototype.toString = function () {
        switch (this.suit) {
            case "clubs":
                return "|" + this.rank + " - ♣| This card is: Rank [" + this.rank + "] - Type [" + this.color + " " + this.suit + "] - In-Game Value [" + this.inGameValue + "]";
            case "diamonds":
                return "|" + this.rank + " - ♦| This card is: Rank [" + this.rank + "] - Type [" + this.color + " " + this.suit + "] - In-Game Value [" + this.inGameValue + "]";
            case "hearts":
                return "|" + this.rank + " - ♥| This card is: Rank [" + this.rank + "] - Type [" + this.color + " " + this.suit + "] - In-Game Value [" + this.inGameValue + "]";
            case "spades":
                return "|" + this.rank + " - ♠| This card is: Rank [" + this.rank + "] - Type [" + this.color + " " + this.suit + "] - In-Game Value [" + this.inGameValue + "]";
            default:
                return "";
        }
    };
    return Card;
}());
exports.Card = Card;
