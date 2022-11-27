import { SlotLuckyBoy } from "./SlotLuckyBoy";
import { ReadlineSync } from "./ReadlineSync";
import { SlotLuckyMan } from "./SlotLuckyMan";
// import { Person } from "./Person";
export class Casino extends ReadlineSync{
  private name:string;
  private slotLuckyBoy:SlotLuckyBoy;
  private slotLuckyMan:SlotLuckyMan;
  // private someone:Person;

  public constructor(paramName:string/*,paramPerson:Person*/,paramSlotLuckyBoy:SlotLuckyBoy,paramSlotLuckyMan:SlotLuckyMan) {
    super();
    
    this.name = paramName;
    // this.someone = paramPerson;
    this.slotLuckyBoy = paramSlotLuckyBoy;
    this.slotLuckyMan = paramSlotLuckyMan;
  }
  
  public getName():string{
    return this.name;
  }
  public setName(paramName: string):void{
    this.name = paramName;
  }
  public enter():void{
    console.log("* You have entered the casino *"+"\n"+"¡Welcome to El Sanjuanino casino!"+"\n");
    let validResponse:boolean = false;
    while (validResponse === false){
      let input:number = Number(this.rls.question("Make your choice"+"\n"+"<> Games <>"+"\n"+"[1] Slots - Lucky Boy"+"\n"+"[2] Slots - Lucky Man"+"\n"+"<> Exit <>"+"\n"+"[3] Leave the casino"+"\n"+"\n"+"Your selection is: "));
      if (input === 1){
        console.log("\n"+"---> Slots - Lucky Boy <---");
        this.slotLuckyBoy.play();
        validResponse = true;
      } else if (input === 2){
        console.log("\n"+"---> Slots - Lucky Man <---");
        this.slotLuckyMan.play();
        validResponse = true;
      } else if (input === 3){
        this.exit();
        validResponse = true;
      } else {
        console.log("Please enter a valid number."+"\n");
      }
    }
  }
  public exit():void{
    console.log("\n"+"It has been a pleasure having you here, we hope you come back soon."+"\n"+"* You have left the casino *"+"\n");
  }
  // public chooseAndPlay(){
  //   let validResponse:boolean = false;
  //   while (validResponse === false){
  //   let input:number = Number(this.rls.question("Make your choice:"+"\n"+"[1] Slots Lucky Boy"+"\n"+"[2] Slots Lucky Man"+"\n"+"Your selection: "));
  //     if (input === 1){
  //       this.slotLuckyBoy.play();
  //       validResponse = true;
  //     } else if (input === 2){
  //       this.slotLuckyMan.play();
  //       validResponse = true;
  //     } else {
  //       console.log("Please enter a valid number."+"\n");
  //     }
  //   }
  // }
}