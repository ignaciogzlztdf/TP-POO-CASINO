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
exports.Cashier = void 0;
var ReadlineSync_1 = require("./ReadlineSync");
var Cashier = /** @class */ (function (_super) {
    __extends(Cashier, _super);
    function Cashier(paramUser) {
        var _this = _super.call(this) || this;
        _this.user = paramUser;
        return _this;
    }
    Cashier.prototype.buyCasinoChips = function () {
        var cash = Number(this.rls.question("Enter your total cash: "));
    };
    Cashier.prototype.exchangeChipsForCash = function () {
        var cash = Number(this.rls.question("Enter your total cash: "));
    };
    return Cashier;
}(ReadlineSync_1.ReadlineSync));
exports.Cashier = Cashier;
