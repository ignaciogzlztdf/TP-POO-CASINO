"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    // le doy los valores a los juegos con los setters
    function Casino(paramName) {
        this.name = paramName;
    }
    Casino.prototype.getName = function () {
        return this.name;
    };
    Casino.prototype.setName = function (paramName) {
        this.name = paramName;
    };
    Casino.prototype.enter = function () {
        console.log("You have entered the casino");
    };
    Casino.prototype.exit = function () {
        console.log("You have left the casino");
    };
    return Casino;
}());
exports.Casino = Casino;
