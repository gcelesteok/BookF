export class Habilidad {
    id?: number;
    habilidad : string;
    alcance: number;
    

    constructor(habilidad: string, alcance: number) {
        this.habilidad = habilidad;
        this.alcance = alcance;
        
    }
}
