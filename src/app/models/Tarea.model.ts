export class Tarea{
    nombre:string;
    descripcion:string;
    estado:boolean;

    constructor(nombre:string = '', descripcion:string = ''){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.estado = false;

    }
}
