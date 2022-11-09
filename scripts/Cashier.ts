import { Person } from "./Person";
import { ReadlineSync } from "./ReadlineSync";

export class Cashier extends ReadlineSync{
  private user:Person;
  public constructor(paramUser:Person){
    super();
    this.user = paramUser;
  }
  public buyCasinoChips(){
    let cash:number = Number(this.rls.question("Enter your total cash: "));
    
  }
  public exchangeChipsForCash(){
    let cash:number = Number(this.rls.question("Enter your total cash: "));
    
  }
}