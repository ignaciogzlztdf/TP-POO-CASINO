import { SlotLuckyBoy } from "./SlotLuckyBoy";
import { Cashier } from "./Cashier"
import { ReadlineSync } from "./ReadlineSync";
export class Casino extends ReadlineSync{
  private name:string;
  private slotLuckyboy:SlotLuckyBoy;
  private cashier:Cashier;
  // le doy los valores a los juegos con los setters
  public constructor(paramName:string) {
    super();
    this.name = paramName;
  }
  public getName():string{
    return this.name;
  }
  public setName(paramName: string):void{
    this.name = paramName;
  }
  public enter():void{
    console.log("You have entered the casino."+"\n"+"¡Welcome to El Sanjuanino casino!"+"\n");
    let validResponse:boolean = false;
    while (validResponse === false){
      let input:number = Number(this.rls.question("What do you wanna do?"+"\n"+"[1] Go to the cashier"+"\n"+"[2] Exit the casino"+"\n"+"Your selection: "));
      if (input === 1){
        this.goToTheCashier();
        validResponse = true;
      } else if (input === 2){
        this.exit();
        validResponse = true;
      } else {
        console.log("Please enter a valid number."+"\n");
      }
    }
  }
  public exit():void{
    console.log("\n"+"It has been a pleasure having you here, we hope you come back soon."+"\n"+"You have left the casino.");
  }
  public goToTheCashier(){
    console.log("\n"+"You're in the cashier.");
  }
}