export class Proyecto {
    id?: number;
    nombre: string;
    imgProyecto: string;
    descripcion: string;
    url: string;

    constructor(nombre: string, imgProyecto: string, descripcion: string, url: string) {
        this.nombre = nombre;
        this.imgProyecto = imgProyecto;
        this.descripcion = descripcion;
        this.url = url;
        
    }
}
