"use strict";
exports.__esModule = true;
var SlotLuckyBoy_1 = require("./SlotLuckyBoy");
var SlotLuckyMan_1 = require("./SlotLuckyMan");
// let yourself = new Person("Ignacio","González",11111111,"04-08-2004",100);
// let rls = require('readline-sync');
// let chosenTopic = rls.question("Choose a number to select the game topic:" + "\n" + "[1] Lucky Boy" + "\n" + "[2] Lucky Man" + "\n" + "Your selection is: ");
// games
var slotLuckyBoy = new SlotLuckyBoy_1.SlotLuckyBoy();
var slotLuckyMan = new SlotLuckyMan_1.SlotLuckyMan();
// console.log(slotLuckyBoy.getTopic());
// console.log(slotLuckyBoy.getBet());
// slotLuckyBoy.play();
// slotLuckyMan.play();
console.log(slotLuckyBoy.generateNumbers());
