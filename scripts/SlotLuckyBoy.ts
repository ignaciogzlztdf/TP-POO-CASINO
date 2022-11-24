import { AbstractSlots } from "./AbstractSlots";

export class SlotLuckyBoy extends AbstractSlots {
  public constructor(){
    super("Lucky Boy");
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
    console.log("\n"+"---> Slots - Lucky Boy <---");
    let bet:number = Number(this.rls.question("\n"+"Enter your bet: "));
    if (bet <= 0 || bet > 10){
      console.log("\n"+"This game topic only allows you to bet up to 10 usd. Try again or choose another game topic.")
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