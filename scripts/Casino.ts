import { SlotLuckyBoy } from "./SlotLuckyBoy";
export class Casino {
  private name:string;
  private slotLuckyboy:SlotLuckyBoy;
  // le doy los valores a los juegos con los setters
  public constructor(paramName:string) {
    this.name = paramName;
  }
  public getName():string{
    return this.name;
  }
  public setName(paramName: string):void{
    this.name = paramName;
  }
  public enter(){
    console.log("You have entered the casino");

  }
  public exit(){
    console.log("You have left the casino");

  }
}