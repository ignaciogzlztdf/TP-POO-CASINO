import { AbstractSlots } from "./AbstractSlots";

export class SlotLuckyMan extends AbstractSlots {
  
  public constructor(){
    super("Lucky Man");
  }

  public play():void{
    let bet:number = Number(this.rls.question("\n"+"Enter your bet: "));
    if (bet < 100 || bet > 1000){
      console.log("\n"+"This game topic only allows to bet from 100 to 1000 usd. Try again.")
      return this.play();
    } else {
      this.bet = bet;
    }
    this.generateNumbers();
    if (this.checkNumbers()){
      this.userHaveWon();
    } else {
      this.userHaveLost();
    }
  }
}