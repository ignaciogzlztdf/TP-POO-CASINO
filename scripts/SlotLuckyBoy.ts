import { AbstractSlots } from "./AbstractSlots";

export class SlotLuckyBoy extends AbstractSlots {
  public getTopic():string{
    return this.topic;
  }
  public getBet():number{
    return this.bet;
  }
}