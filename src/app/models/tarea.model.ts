//A1 1ero general el modelo conn el que se va a trabajar que se llamara tarea
// creamos una clase la cual exportaremos y dentro definimos sus propiedades
// Luego interactuar con ella
export class Tareay{
    titulo:string;
    descripcion:string;
    completa:boolean;

    // A2 en el constructpr definimos los parametros que va recibir el constructor
    // el siguiente paso sera generar los componentes
    constructor(pTitulo:string='', pDescripcion:string=''){
        this.titulo=pTitulo;
        this.descripcion=pDescripcion;
        this.completa=false;
    }

}