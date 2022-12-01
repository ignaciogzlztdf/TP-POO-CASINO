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
exports.SlotLuckyBoy = void 0;
var AbstractSlots_1 = require("./AbstractSlots");
var SlotLuckyBoy = /** @class */ (function (_super) {
    __extends(SlotLuckyBoy, _super);
    function SlotLuckyBoy() {
        return _super.call(this, "Lucky Boy") || this;
    }
    SlotLuckyBoy.prototype.namePresentation = function () {
        // the name of the game is displayed
        console.log("\n" + "---> Slots - Lucky Boy <---");
    };
    SlotLuckyBoy.prototype.requestBet = function () {
        // the bet is requested
        var bet = Number(this.rls.question("\n" + "Enter your bet: "));
        if (!Number.isInteger(bet)) {
            console.log("\n" + "You are only allowed to bet integer amounts.");
            return this.requestBet();
        }
        if (bet <= 0 || bet > 10) {
            console.log("\n" + "This game topic only allows you to bet up to 10 usd. Try again.");
            return this.requestBet();
        }
        else {
            this.bet = bet;
        }
    };
    SlotLuckyBoy.prototype.play = function () {
        this.namePresentation();
        this.requestBet();
        this.generateNumbers();
        if (this.checkNumbers()) {
            this.userHaveWon();
        }
        else {
            this.userHaveLost();
        }
    };
    return SlotLuckyBoy;
}(AbstractSlots_1.AbstractSlots));
exports.SlotLuckyBoy = SlotLuckyBoy;
