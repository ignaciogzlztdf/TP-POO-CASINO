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
exports.AbstractSlots = void 0;
var ReadlineSync_1 = require("./ReadlineSync");
var AbstractSlots = /** @class */ (function (_super) {
    __extends(AbstractSlots, _super);
    function AbstractSlots(paramTopic) {
        var _this = _super.call(this) || this;
        _this.topic = paramTopic;
        _this.bet = 0;
        return _this;
    }
    AbstractSlots.prototype.differentNumbers = function () {
        var arrayOfNumbers = [];
        for (var index = 0; index < 3; index++) {
            arrayOfNumbers[index] = Math.floor(Math.random() * 10);
        }
        this.firstNumber = arrayOfNumbers[0];
        this.secondNumber = arrayOfNumbers[1];
        this.thirdNumber = arrayOfNumbers[2];
        if (arrayOfNumbers[0] === arrayOfNumbers[1] && arrayOfNumbers[2] === arrayOfNumbers[1]) {
            this.differentNumbers();
        }
    };
    AbstractSlots.prototype.generateNumbers = function () {
        var probability = 15;
        for (var validNumber = 9; validNumber >= 0; validNumber--) {
            // console.log("Prob: "+ probability + " and Number: "+ validNumber);
            if (Math.floor(Math.random() * 101) < probability) {
                this.firstNumber = validNumber;
                this.secondNumber = this.firstNumber;
                this.thirdNumber = this.firstNumber;
                console.log("\n" + "The result is: " + "[" + this.firstNumber + "] " + "[" + this.secondNumber + "] " + "[" + this.thirdNumber + "]");
                return;
            }
            else {
                probability = probability - 1.5;
            }
        }
        this.differentNumbers();
        console.log("\n" + "The result is: " + "[" + this.firstNumber + "] " + "[" + this.secondNumber + "] " + "[" + this.thirdNumber + "]");
        return;
    };
    AbstractSlots.prototype.checkNumbers = function () {
        if (this.firstNumber === this.secondNumber && this.secondNumber === this.thirdNumber) {
            return true;
        }
        else {
            return false;
        }
    };
    return AbstractSlots;
}(ReadlineSync_1.ReadlineSync));
exports.AbstractSlots = AbstractSlots;
