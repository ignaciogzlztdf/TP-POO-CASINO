import { ReadlineSync } from "./ReadlineSync";
import { SlotLuckyBoy } from "./SlotLuckyBoy";
import { SlotLuckyMan } from "./SlotLuckyMan";
import { Blackjack } from "./Blackjack";

export class Casino extends ReadlineSync{
  private name:string;
  private gameSlotLuckyBoy:SlotLuckyBoy;
  private gameSlotLuckyMan:SlotLuckyMan;
  private gameBlackjack:Blackjack;

  public constructor(paramName:string,paramSlotLuckyBoy:SlotLuckyBoy,paramSlotLuckyMan:SlotLuckyMan,paramBlackjack:Blackjack) {
    super();
    this.name = paramName;
    this.gameSlotLuckyBoy = paramSlotLuckyBoy;
    this.gameSlotLuckyMan = paramSlotLuckyMan;
    this.gameBlackjack = paramBlackjack;
  }
  
  public getName():string{
    return this.name;
  }
  public setName(paramName: string):void{
    this.name = paramName;
  }
  private welcomeUser():void{
    console.log("* You have entered the casino *"+"\n"+"¡Welcome to El Sanjuanino casino!"+"\n");
  }
  private chooseGameOrLeave():void{
    let inputNumber:number = Number(this.rls.question("<> Games <>"+"\n"+"[1] Slots - Lucky Boy"+"\n"+"[2] Slots - Lucky Man"+"\n"+"[3] Blackjack"+"\n"+"<> Exit <>"+"\n"+"[4] Leave the casino"+"\n"+"\n"+"Your selection is: "));
    switch (inputNumber) {
      case 1:
        this.gameSlotLuckyBoy.play();
        break;
      case 2:
        this.gameSlotLuckyMan.play();
        break;
      case 3:
        this.gameBlackjack.play();
        break;
      case 4:
        this.exit();
        break;
      default:
        console.log("\n"+"Please enter a valid number."+"\n");
        this.chooseGameOrLeave();
        break;
    }
  }
  private exit():void{
    console.log("\n"+"It has been a pleasure having you here, we hope you come back soon."+"\n"+"* You have left the casino *"+"\n");
  }
  public enter():void{
    this.welcomeUser();
    this.chooseGameOrLeave();
  }
}