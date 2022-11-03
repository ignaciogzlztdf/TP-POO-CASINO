export class Person extends Grandfather implements InterfacePerson{
    protected name:string;
    protected lastName:string;
    protected DNI:number;

    constructor(newName:string,newLastName:string,newDNI:number) {
        super();
        this.name = newName;
        this.lastName = newLastName;
        this.DNI = newDNI;
    }
    public getName(): string {
        return this.name;
    }
    public setName(newName: string): void {
        this.name = newName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(newLastName: string): void {
        this.lastName = newLastName;
    }
    public getFullName():string{
        return this.name + " " + this.lastName;
    }
    public getDNI(): number {
        return this.DNI;
    }
    public setDNI(newDNI: number): void {
        this.DNI = newDNI;
    }
}
