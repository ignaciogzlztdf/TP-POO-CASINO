export class Card {
  private suit:string;
  private rank:string;
  private inGameValue:number;

  constructor(suit:string, rank:string, inGameValue:number){
    this.suit = suit;
    this.rank = rank;
    this.inGameValue = inGameValue;
  }
  // getters & setters
  private getSuit():string{
    return this.suit;
  }
  private setSuit(paramSuit:string):void{
    this.suit = paramSuit;
  }
  private getRank():string{
    return this.rank;
  }
  private setRank(paramRank:string):void{
    this.rank = paramRank;
  }
  private getInGameValue():number{
    return this.inGameValue;
  }
  private setInGameValue(paramInGameValue:number):void{
    this.inGameValue = paramInGameValue;
  }

  private toString():string{
    return "This card is a "+this.rank+" of "+this.suit+" and its value is "+this.inGameValue;
  }
}