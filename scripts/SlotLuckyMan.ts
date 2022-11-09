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
  public payWinnings(): void {
    
  }
  public subtractCash(): void {
    
  }
  public play():void{
    let bet:number = Number(this.rls.question("Enter your bet: "));
    if (bet < 100 || bet > 1000){
      console.log("\n"+"This game topic only allows to bet from 100 to 1000 usd. Try again or choose another game topic.")
      return this.play();
    } else {
      this.bet = bet;
    }
    this.generateNumbers();
  }
}