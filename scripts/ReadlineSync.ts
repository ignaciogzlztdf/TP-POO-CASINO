export class ReadlineSync {
  protected rls:any;

  public constructor(){
    this.rls = require('readline-sync');
  }
}