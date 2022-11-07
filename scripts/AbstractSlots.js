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
        var _this = 
        /*if (numberTopic === "1"){
          this.topic = "Lucky Boy";
        } else if (numberTopic === "2"){
          this.topic = "Lucky Man";
        } else {
          console.log("Error, please enter a valid number.");
        }*/
        _super.call(this) || this;
        _this.topic = paramTopic;
        _this.bet = 0;
        return _this;
    }
    AbstractSlots.prototype.generateNumbers = function () {
        var probability = 15;
        for (var validNumber = 9; validNumber >= 0; validNumber--) {
            console.log("Prob: " + probability + " and Number: " + validNumber);
            if (Math.floor(Math.random() * 100) < probability) {
                this.firstNumber = validNumber;
                console.log("[" + this.firstNumber + "] " + "[" + this.firstNumber + "] " + "[" + this.firstNumber + "]");
                return true;
            }
            else {
                probability = probability - 1.5;
            }
        }
        return false;
    };
    AbstractSlots.prototype.randomNumbers = function () {
        if (Math.floor((Math.random() * 100) + 1) < 10) {
            this.firstNumber = 9;
            this.secondNumber = this.firstNumber;
            this.thirdNumber = this.firstNumber;
        }
        else {
        }
    };
    return AbstractSlots;
}(ReadlineSync_1.ReadlineSync));
exports.AbstractSlots = AbstractSlots;
