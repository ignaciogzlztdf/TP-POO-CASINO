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
    function Casino(paramName, paramSlotLuckyBoy, paramSlotLuckyMan, paramBlackjack) {
        var _this = _super.call(this) || this;
        _this.name = paramName;
        _this.gameSlotLuckyBoy = paramSlotLuckyBoy;
        _this.gameSlotLuckyMan = paramSlotLuckyMan;
        _this.gameBlackjack = paramBlackjack;
        return _this;
    }
    Casino.prototype.getName = function () {
        return this.name;
    };
    Casino.prototype.setName = function (paramName) {
        this.name = paramName;
    };
    Casino.prototype.welcomeUser = function () {
        console.log("* You have entered the casino *" + "\n" + "¡Welcome to El Sanjuanino casino!" + "\n");
    };
    Casino.prototype.chooseGameOrLeave = function () {
        var inputNumber = Number(this.rls.question("<> Games <>" + "\n" + "[1] Slots - Lucky Boy" + "\n" + "[2] Slots - Lucky Man" + "\n" + "[3] Blackjack" + "\n" + "<> Exit <>" + "\n" + "[4] Leave the casino" + "\n" + "\n" + "Your selection is: "));
        switch (inputNumber) {
            case 1:
                this.gameSlotLuckyBoy.play();
                break;
            case 2:
                this.gameSlotLuckyMan.play();
                break;
            case 3:
                this.gameBlackjack.play();
                break;
            case 4:
                this.exit();
                break;
            default:
                console.log("\n" + "Please enter a valid number." + "\n");
                this.chooseGameOrLeave();
                break;
        }
    };
    Casino.prototype.exit = function () {
        console.log("\n" + "It has been a pleasure having you here, we hope you come back soon." + "\n" + "* You have left the casino *" + "\n");
    };
    Casino.prototype.enter = function () {
        this.welcomeUser();
        this.chooseGameOrLeave();
    };
    return Casino;
}(ReadlineSync_1.ReadlineSync));
exports.Casino = Casino;
