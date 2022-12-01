import { ReadlineSync } from "./ReadlineSync";

export abstract class AbstractSlots extends ReadlineSync {
  protected topic:string;
  protected bet:number;
  protected firstNumber:number;
  protected secondNumber:number;
  protected thirdNumber:number;

  public constructor(paramTopic:string){
    super();
    this.topic = paramTopic;
    this.bet = 0;
  }
  public getBet():number{
    return this.bet;
  }
  public setBet(paramBet:number):void{
    this.bet = paramBet;
  }
  public getTopic():string{
    return this.topic;
  }
  public setTopic(paramTopic:string):void{
    this.topic = paramTopic;
  }
  public checkNumbers():boolean{
    if (this.firstNumber === this.secondNumber && this.secondNumber === this.thirdNumber){
      return true;
    } else {
      return false;
    }
  }
  public differentNumbers():void{
    let arrayOfNumbers:number[] = [];
    for (let index:number = 0;index < 3;index++){
      arrayOfNumbers[index] = Math.floor(Math.random()*10);
    }
    this.firstNumber = arrayOfNumbers[0];
    this.secondNumber = arrayOfNumbers[1];
    this.thirdNumber = arrayOfNumbers[2];
    if (arrayOfNumbers[0] === arrayOfNumbers[1] && arrayOfNumbers[2] === arrayOfNumbers[1]){
      this.differentNumbers();
    }
  }
  public generateNumbers():void{
    let probability:number = 15;
    for (let validNumber:number = 9;validNumber >= 0;validNumber--){
        // console.log("Prob: "+ probability + " and Number: "+ validNumber);
        if (Math.floor(Math.random()*101) < probability){
          this.firstNumber = validNumber;
          this.secondNumber = this.firstNumber;
          this.thirdNumber = this.firstNumber;
          console.log("\n"+"The result is: "+"[" + this.firstNumber + "] "+"[" + this.secondNumber + "] "+"[" + this.thirdNumber + "]");
          return;
        } else {
          probability = probability - 1.5;
        }
    }
    this.differentNumbers();
    console.log("\n"+"The result is: "+"[" + this.firstNumber + "] "+"[" + this.secondNumber + "] "+"[" + this.thirdNumber + "]");
    return;
  }
  public userHaveLost(): void {
    console.log("\n"+"You have lost.");
  }
  public userHaveWon(): void {
    console.log("\n"+"¡You have won!");
  }
}