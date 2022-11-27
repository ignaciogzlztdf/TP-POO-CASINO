import { AbstractSlots } from "./AbstractSlots";

export class SlotLuckyBoy extends AbstractSlots {
  
  public constructor(){
    super("Lucky Boy");
  }
  
  public play():void{
    let bet:number = Number(this.rls.question("\n"+"Enter your bet: "));
    if (bet <= 0 || bet > 10){
      console.log("\n"+"This game topic only allows you to bet up to 10 usd. Try again.")
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