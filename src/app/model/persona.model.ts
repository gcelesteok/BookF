export class Persona{
    id?: number;
    nombrePersona: string;
    puestoPersona: string;
    ubicacionPersona: string;
    sobreMi: string;
    imgPersona: string;
    emailPersona: string;
    telPersona: number;
    githubPersona: string;
    linkedinPersona: string;


    constructor(nombrePersona: string, puestoPersona: string, ubicacionPersona: string,sobreMi: string,imgPersona: string,emailPersona: string,telPersona: number,githubPersona: string, linkedinPersona: string) {
      this.nombrePersona = nombrePersona;
      this.puestoPersona = puestoPersona;
      this.ubicacionPersona = ubicacionPersona;
      this.sobreMi = sobreMi;
      this.imgPersona = imgPersona;
      this.emailPersona = emailPersona;
      this.telPersona = telPersona;
      this.githubPersona = githubPersona;
      this.linkedinPersona = linkedinPersona;
    }
  
}