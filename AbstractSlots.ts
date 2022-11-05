export abstract class AbstractSlots {
  protected topic:string;
  protected bet:number;

  public constructor(numberTopic:string,paramBet:number){
    // probar si funciona el readline como number o si debería
    // usar un string
    if (numberTopic === "1"){
      this.topic = "Lucky Boy";
    } else if (numberTopic === "2"){
      this.topic = "Lucky Man";
    } else {
      console.error("Error, please enter a valid number.");
    }
    this.bet = paramBet;
  }
  abstract getTopic():string;
  abstract getBet():number;
}