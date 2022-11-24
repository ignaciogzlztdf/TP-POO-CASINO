import { AbstractSlots } from "./AbstractSlots";

export class SlotLuckyMan extends AbstractSlots {
  public constructor(){
    super("Lucky Man");
  }
  public getTopic():string{
    return this.topic;
  }
  public getBet():number{
    return this.bet;
  }
  public userHaveLost(): void {
    console.log("\n"+"You have lost.");
  }
  public userHaveWon(): void {
    console.log("\n"+"You have won.");
  }
  public play():void{
    console.log("\n"+"---> Slots - Lucky Man <---");
    let bet:number = Number(this.rls.question("\n"+"Enter your bet: "));
    if (bet < 100 || bet > 1000){
      console.log("\n"+"This game topic only allows to bet from 100 to 1000 usd. Try again or choose another game topic.")
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