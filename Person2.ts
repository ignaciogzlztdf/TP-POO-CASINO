export class Person {
  protected name:string;
  protected lastName:string;
  protected dni:number;
  protected passport:string;
  protected dateOfBirth:Date;

  constructor(name:string,lastName:string,dni:number,passport:string,dateOfBirth:Date){
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.passport = passport;
    this.dateOfBirth = dateOfBirth;
  }
  // getters & setters
  public getName():string{
    return this.name;
  }
  public setName(name:string){
    this.name = name;
  }
  public getLastName():string{
    return this.lastName;
  }
  public setLastName(lastName:string){
    this.lastName = lastName;
  }
  public getDni():number{
    return this.dni;
  }
  public setDni(dni:number){
    this.dni = dni;
  }
  public getPassport():string{
    return this.passport;
  }
  public setPassport(passport:string){
    this.passport = passport;
  }
  public getDateOfBirth():Date{
    return this.dateOfBirth;
  }
  public setDateOfBirth(dateOfBirth:Date){
    this.dateOfBirth = dateOfBirth;
  }
  public getAge():number{
    let today:Date = new Date();
    return today.getFullYear() - this.dateOfBirth.getFullYear();
  }
}