import { AbstractSlots } from "./AbstractSlots";
import { ICasinoGame } from "./ICasinoGame";

export class SlotLuckyMan extends AbstractSlots implements ICasinoGame {
  
  public constructor(){
    super("Lucky Man");
  }
  public namePresentation(): void {
    // the name of the game is displayed
    console.log("\n"+"---> Slots - Lucky Man <---");
  }
  public requestBet(): void {
    // the bet is requested
    let bet:number = Number(this.rls.question("\n"+"Enter your bet: "));
    if (!Number.isInteger(bet)){
      console.log("\n"+"You are only allowed to bet integer amounts.");
      return this.requestBet();
    }
    if (bet < 100 || bet > 1000){
      console.log("\n"+"This game topic only allows to bet from 100 to 1000 usd. Try again.")
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