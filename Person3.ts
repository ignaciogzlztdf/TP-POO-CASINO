class Persona {

    private nombre:string;
    private apellido:string;
    private fechaNacimiento:Date;
    private nacionalidad:string;
    private nacionalidadSegunda:string;
    private contarNacionalidad:number;
    private dni:number;

    constructor(nombre:string,apellido:string,nacionalidad:string,dni:number,fechaNacimiento:Date){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.dni = dni;
        this.contarNacionalidad = 0;
        this.fechaNacimiento = fechaNacimiento;
        
    }

    get_nombre():string{
        return this.nombre;
    }

    set_nombre(nombre:string){
        this.nombre = nombre;
    }

    get_apellido():string{
        return this.apellido;
    }

    set_apellido(apellido:string){
        this.apellido = apellido;
    }

    get_fechaNacimiento():string{
        return this.fechaNacimiento.toString();
    }

    set_fechaNacimiento(fechaNacimiento:Date,clave:number){
        if(clave == 123)
            this.fechaNacimiento = fechaNacimiento;
        else
            console.log('usted no tiene la autoridad para cambiar la fecha de nacimiento')
    }

    get_nacionalidad():string{
        if(this.contarNacionalidad < 1)
            return this.nacionalidad;
        else
            return this.nacionalidad + "/" + this.nacionalidadSegunda; 
    }

    set_nacionalidad(nacionalidad:string){
        if(this.contarNacionalidad < 1){
            this.contarNacionalidad++;
            this.nacionalidadSegunda = nacionalidad;
            console.log("Nacionalidad cambiada");}
        else{
            console.log("Usted no puede tener mas de dos nacionalidades");
        }
    }

    get_dni():number{
        return this.dni;
    }

    get_edad():number{
        let hoy:Date = new Date();
        return  hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    }

    toString():string{
        let respuesta:string = this.get_nombre() + " " +this.get_apellido()+ " DNI: " + this.get_dni();
        return respuesta;
    }
}

let fecha = new Date('08-05-1989');


let persona1 = new Persona("Juan","Perez","Argentina",30303030,fecha);



console.log(persona1.get_nombre());
console.log(persona1.get_apellido());
console.log(persona1.get_fechaNacimiento());


console.log(persona1.get_dni());

console.log(persona1.get_edad());

console.log(persona1.toString());
