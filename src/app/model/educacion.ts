export class Educacion {
    id?: number;
    nombreEducacion: string;
    descripcionEducacion: string;
    institucion: string;
    imagenE: string;
     
    constructor(nombreEducacion:string,descripcionEducacion:string,institucion:string,imagenE:string){
        this.nombreEducacion = nombreEducacion;
        this.descripcionEducacion = descripcionEducacion;
        this.institucion = institucion;
        this.imagenE = imagenE;
        
    }

    
}
