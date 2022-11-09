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
exports.Casino = void 0;
var ReadlineSync_1 = require("./ReadlineSync");
var Casino = /** @class */ (function (_super) {
    __extends(Casino, _super);
    function Casino(paramName, paramPerson, paramSlotLuckyBoy, paramSlotLuckyMan) {
        var _this = _super.call(this) || this;
        _this.name = paramName;
        _this.someone = paramPerson;
        _this.slotLuckyBoy = paramSlotLuckyBoy;
        _this.slotLuckyMan = paramSlotLuckyMan;
        return _this;
    }
    Casino.prototype.getName = function () {
        return this.name;
    };
    Casino.prototype.setName = function (paramName) {
        this.name = paramName;
    };
    Casino.prototype.enter = function () {
        console.log("You have entered the casino." + "\n" + "¡Welcome to El Sanjuanino casino!" + "\n");
        var validResponse = false;
        while (validResponse === false) {
            var input = Number(this.rls.question("What do you wanna do?" + "\n" + "[1] Go to the cashier" + "\n" + "[2] Exit the casino" + "\n" + "Your selection: "));
            if (input === 1) {
                this.goToTheCashier();
                validResponse = true;
            }
            else if (input === 2) {
                this.exit();
                validResponse = true;
            }
            else {
                console.log("Please enter a valid number." + "\n");
            }
        }
    };
    Casino.prototype.exit = function () {
        console.log("\n" + "It has been a pleasure having you here, we hope you come back soon." + "\n" + "You have left the casino." + "\n");
    };
    Casino.prototype.goToTheCashier = function () {
        console.log("\n" + "You're in the cashier.");
        var validResponse = false;
        while (validResponse === false) {
            var input = Number(this.rls.question("What do you want?" + "\n" + "[1] Buy casino chips" + "\n" + "[2] Exchange casino chips for cash" + "\n" + "Your selection: "));
            if (input === 1) {
                this.slotLuckyBoy.play();
                validResponse = true;
            }
            else if (input === 2) {
                this.slotLuckyMan.play();
                validResponse = true;
            }
            else {
                console.log("Please enter a valid number." + "\n");
            }
        }
    };
    Casino.prototype.chooseAndPlay = function () {
        var validResponse = false;
        while (validResponse === false) {
            var input = Number(this.rls.question("Make your choice:" + "\n" + "[1] Slots Lucky Boy" + "\n" + "[2] Slots Lucky Man" + "\n" + "Your selection: "));
            if (input === 1) {
                this.slotLuckyBoy.play();
                validResponse = true;
            }
            else if (input === 2) {
                this.slotLuckyMan.play();
                validResponse = true;
            }
            else {
                console.log("Please enter a valid number." + "\n");
            }
        }
    };
    return Casino;
}(ReadlineSync_1.ReadlineSync));
exports.Casino = Casino;
