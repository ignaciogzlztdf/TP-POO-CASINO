export class Person {
    private name:string;
    private lastName:string;
    private dni:number;
    private dateOfBirth:Date;
    private cash:number;
    private casinoChips:number;

    public constructor(paramName:string,paramLastName:string,paramDni:number,paramDateOfBirth:string) {
        this.name = paramName;
        this.lastName = paramLastName;
        this.dni = paramDni;
        this.dateOfBirth = new Date (paramDateOfBirth);
        this.cash = 0;
    }
    public getName():string{
        return this.name;
    }
    public setName(paramName: string):void{
        this.name = paramName;
    }
    public getLastName():string{
        return this.lastName;
    }
    public setLastName(paramLastName: string):void{
        this.lastName = paramLastName;
    }
    public getFullName():string{
        return this.name + " " + this.lastName;
    }
    public getDni():number{
        return this.dni;
    }
    public setDni(paramDni: number):void{
        this.dni = paramDni;
    }
    public getDateOfBirth():string{
        return this.dateOfBirth.toString();
    }
    public setDateOfBirth(paramDateOfBirth:string):void{
        this.dateOfBirth = new Date (paramDateOfBirth);
    }
    public getAge():number{
        const START_OF_UNIX_TIME:number = 1970;
        let date:Date = this.dateOfBirth;
        let difference:number = Date.now() - date.getTime();
        date = new Date (difference);
        return Math.abs(date.getUTCFullYear() - START_OF_UNIX_TIME);
    }
    public toString():void{
        console.log("User personal data");
        console.log("Full name: " + this.getFullName());
        console.log("DNI: " + this.getDni());
        console.log("Date of birth: " + this.getDateOfBirth());
        console.log("Age: " + this.getAge());
    }
    public getCash():number{
        return this.cash;
    }
    public setCash(paramCash: number):void{
        this.cash = paramCash;
    }
}