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
        _this.cards = [];
        _this.playerCards = [];
        _this.dealerCards = [];
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
                this.cards.push(card);
                inGameValueIndex++;
            }
        }
    };
    Blackjack.prototype.shuffleTheCards = function () {
        // the cards are shuffled several times
        for (var i = 0; i < 100; i++) {
            this.cards.sort(function () { return Math.random() - 0.5; });
        }
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
    };
    return Blackjack;
}(ReadlineSync_1.ReadlineSync));
exports.Blackjack = Blackjack;
