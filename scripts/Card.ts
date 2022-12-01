export class Card {
  private suit:string;
  private color:string;
  private rank:string;
  private inGameValue:number;

  constructor(suit:string, rank:string, color:string, inGameValue:number){
    this.suit = suit;
    this.rank = rank;
    this.color = color;
    this.inGameValue = inGameValue;
  }
  // getters & setters
  public getSuit():string{
    return this.suit;
  }
  public setSuit(paramSuit:string):void{
    this.suit = paramSuit;
  }
  public getColor():string{
    return this.color;
  }
  public setColor(paramColor:string):void{
    this.color = paramColor;
  }
  public getRank():string{
    return this.rank;
  }
  public setRank(paramRank:string):void{
    this.rank = paramRank;
  }
  public getInGameValue():number{
    return this.inGameValue;
  }
  public setInGameValue(paramInGameValue:number):void{
    this.inGameValue = paramInGameValue;
  }
  public toString():string{
    switch (this.suit){
      case "clubs":
        return "|"+this.rank+" - ♣| This card is: Rank ["+this.rank+"] - Type ["+this.color+" "+this.suit+"] - In-Game Value ["+this.inGameValue+"]";
      case "diamonds":
        return "|"+this.rank+" - ♦| This card is: Rank ["+this.rank+"] - Type ["+this.color+" "+this.suit+"] - In-Game Value ["+this.inGameValue+"]";
      case "hearts":
        return "|"+this.rank+" - ♥| This card is: Rank ["+this.rank+"] - Type ["+this.color+" "+this.suit+"] - In-Game Value ["+this.inGameValue+"]";
      case "spades":
        return "|"+this.rank+" - ♠| This card is: Rank ["+this.rank+"] - Type ["+this.color+" "+this.suit+"] - In-Game Value ["+this.inGameValue+"]";
      default:
        return "";
    }
  }
}