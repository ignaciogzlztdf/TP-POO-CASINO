import { SlotLuckyBoy } from "./SlotLuckyBoy";
import { Cashier } from "./Cashier"
import { ReadlineSync } from "./ReadlineSync";
import { SlotLuckyMan } from "./SlotLuckyMan";
import { Person } from "./Person";
export class Casino extends ReadlineSync{
  private name:string;
  private slotLuckyBoy:SlotLuckyBoy;
  private slotLuckyMan:SlotLuckyMan;
  private cashier:Cashier;
  private someone:Person;

  public constructor(paramName:string,paramPerson:Person,paramSlotLuckyBoy:SlotLuckyBoy,paramSlotLuckyMan:SlotLuckyMan) {
    super();
    this.name = paramName;
    this.someone = paramPerson;
    this.slotLuckyBoy = paramSlotLuckyBoy;
    this.slotLuckyMan = paramSlotLuckyMan;
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
    console.log("\n"+"It has been a pleasure having you here, we hope you come back soon."+"\n"+"You have left the casino."+"\n");
  }
  public goToTheCashier(){
    console.log("\n"+"You're in the cashier.");
    let validResponse:boolean = false;
    while (validResponse === false){
    let input:number = Number(this.rls.question("What do you want?"+"\n"+"[1] Buy casino chips"+"\n"+"[2] Exchange casino chips for cash"+"\n"+"Your selection: "));
      if (input === 1){
        this.cashier.buyCasinoChips();
        validResponse = true;
      } else if (input === 2){
        this.slotLuckyMan.play();
        validResponse = true;
      } else {
        console.log("Please enter a valid number."+"\n");
      }
    }
  }
  public chooseAndPlay(){
    let validResponse:boolean = false;
    while (validResponse === false){
    let input:number = Number(this.rls.question("Make your choice:"+"\n"+"[1] Slots Lucky Boy"+"\n"+"[2] Slots Lucky Man"+"\n"+"Your selection: "));
      if (input === 1){
        this.slotLuckyBoy.play();
        validResponse = true;
      } else if (input === 2){
        this.slotLuckyMan.play();
        validResponse = true;
      } else {
        console.log("Please enter a valid number."+"\n");
      }
    }
  }
}