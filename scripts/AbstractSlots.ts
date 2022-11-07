import { ReadlineSync } from "./ReadlineSync";

export abstract class AbstractSlots extends ReadlineSync {
  protected topic:string;
  protected bet:number;
  protected firstNumber:number;
  protected secondNumber:number;
  protected thirdNumber:number;

  public constructor(paramTopic:string){
    /*if (numberTopic === "1"){
      this.topic = "Lucky Boy";
    } else if (numberTopic === "2"){
      this.topic = "Lucky Man";
    } else {
      console.log("Error, please enter a valid number.");
    }*/
    super();
    this.topic = paramTopic;
    this.bet = 0;
  }
  abstract getTopic():string;
  abstract getBet():number;
  abstract play():void;
  public generateNumbers():boolean{
    let probability:number = 15;
    for (let validNumber:number = 9;validNumber >= 0;validNumber--){
        console.log("Prob: "+ probability + " and Number: "+ validNumber);
        if (Math.floor(Math.random()*100) < probability){
          this.firstNumber = validNumber;
          console.log("[" + this.firstNumber + "] "+"[" + this.firstNumber + "] "+"[" + this.firstNumber + "]");
          return true;
        } else {
          probability = probability - 1.5;
        }
    }
    return false;
  }
  protected randomNumbers() {
    if (Math.floor((Math.random()*100) + 1) < 10){
      this.firstNumber = 9;
      this.secondNumber = this.firstNumber;
      this.thirdNumber = this.firstNumber;
    } else {

    }
  }
}