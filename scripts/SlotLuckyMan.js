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
    SlotLuckyMan.prototype.getTopic = function () {
        return this.topic;
    };
    SlotLuckyMan.prototype.getBet = function () {
        return this.bet;
    };
    SlotLuckyMan.prototype.userHaveLost = function () {
        console.log("\n" + "You have lost.");
    };
    SlotLuckyMan.prototype.userHaveWon = function () {
        console.log("\n" + "You have won.");
    };
    SlotLuckyMan.prototype.play = function () {
        console.log("\n" + "---> Slots - Lucky Man <---");
        var bet = Number(this.rls.question("\n" + "Enter your bet: "));
        if (bet < 100 || bet > 1000) {
            console.log("\n" + "This game topic only allows to bet from 100 to 1000 usd. Try again or choose another game topic.");
            return this.play();
        }
        else {
            this.bet = bet;
        }
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
