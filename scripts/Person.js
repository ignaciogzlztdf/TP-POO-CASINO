"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(paramName, paramLastName, paramDni, paramDateOfBirth, paramCash) {
        this.name = paramName;
        this.lastName = paramLastName;
        this.dni = paramDni;
        this.dateOfBirth = new Date(paramDateOfBirth);
        this.cash = paramCash;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (paramName) {
        this.name = paramName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (paramLastName) {
        this.lastName = paramLastName;
    };
    Person.prototype.getFullName = function () {
        return this.name + " " + this.lastName;
    };
    Person.prototype.getDni = function () {
        return this.dni;
    };
    Person.prototype.setDni = function (paramDni) {
        this.dni = paramDni;
    };
    Person.prototype.getDateOfBirth = function () {
        return this.dateOfBirth.toString();
    };
    Person.prototype.setDateOfBirth = function (paramDateOfBirth) {
        this.dateOfBirth = new Date(paramDateOfBirth);
    };
    Person.prototype.getAge = function () {
        var START_OF_UNIX_TIME = 1970;
        var date = this.dateOfBirth;
        var difference = Date.now() - date.getTime();
        date = new Date(difference);
        return Math.abs(date.getUTCFullYear() - START_OF_UNIX_TIME);
    };
    Person.prototype.toString = function () {
        console.log("User personal data");
        console.log("Full name: " + this.getFullName());
        console.log("DNI: " + this.getDni());
        console.log("Date of birth: " + this.getDateOfBirth());
        console.log("Age: " + this.getAge());
    };
    Person.prototype.getCash = function () {
        return this.cash;
    };
    Person.prototype.setCash = function (paramCash) {
        this.cash = paramCash;
    };
    return Person;
}());
exports.Person = Person;
