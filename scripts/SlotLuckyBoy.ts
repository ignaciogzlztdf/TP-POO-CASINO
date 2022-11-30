import { AbstractSlots } from "./AbstractSlots";
import { ICasinoGame } from "./ICasinoGame";

export class SlotLuckyBoy extends AbstractSlots implements ICasinoGame {
  
  public constructor(){
    super("Lucky Boy");
  }
  public namePresentation(): void {
    // the name of the game is displayed
    console.log("\n"+"---> Slots - Lucky Boy <---");
  }
  public requestBet(){
    let bet:number = Number(this.rls.question("\n"+"Enter your bet: "));
    if (!Number.isInteger(bet)){
      console.log("\n"+"You are only allowed to bet integer amounts.");
      return this.requestBet();
    }
    if (bet <= 0 || bet > 10){
      console.log("\n"+"This game topic only allows you to bet up to 10 usd. Try again.")
      return this.requestBet();
    } else {
      this.bet = bet;
    }
  }
  public play():void{
    this.namePresentation();
    this.requestBet();
    this.generateNumbers();
    if (this.checkNumbers()){
      this.userHaveWon();
    } else {
      this.userHaveLost();
    }
  }
}