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
exports.SlotLuckyMan = void 0;
var AbstractSlots_1 = require("./AbstractSlots");
var SlotLuckyMan = /** @class */ (function (_super) {
    __extends(SlotLuckyMan, _super);
    function SlotLuckyMan() {
        return _super.call(this, "Lucky Man") || this;
    }
    SlotLuckyMan.prototype.namePresentation = function () {
        // the name of the game is displayed
        console.log("\n" + "---> Slots - Lucky Man <---");
    };
    SlotLuckyMan.prototype.requestBet = function () {
        var bet = Number(this.rls.question("\n" + "Enter your bet: "));
        if (!Number.isInteger(bet)) {
            console.log("\n" + "You are only allowed to bet integer amounts.");
            return this.requestBet();
        }
        if (bet < 100 || bet > 1000) {
            console.log("\n" + "This game topic only allows to bet from 100 to 1000 usd. Try again.");
            return this.requestBet();
        }
        else {
            this.bet = bet;
        }
    };
    SlotLuckyMan.prototype.play = function () {
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
    return SlotLuckyMan;
}(AbstractSlots_1.AbstractSlots));
exports.SlotLuckyMan = SlotLuckyMan;
