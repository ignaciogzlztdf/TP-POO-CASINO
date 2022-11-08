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
  public payWinnings(): void {
    
  }
  public subtractCash(): void {
    
  }
  public play():void{
    let bet:number = Number(this.rls.question("Enter your bet: "));
    if (bet <= 0 || bet > 10){
      console.log("\n"+"This game topic only allows you to bet up to 10 usd. Try again or choose another game topic.")
      return this.play();
    } else {
      this.bet = bet;
    }
    this.generateNumbers();
  }
}