import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Tareay} from '../../models/tarea.model'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // A9 decorador Output sin olvidar que se importe
  // tareaCreada es del tipo EventEmitter y dentro de este tenemos que decir
  // que es lo que va a emitir en este caso va emitir una unica tarea
  // lo que estmos emitiendo depende del proyecto o delos componentes
  // no olvidar generar en el constructor
@Output() tareaCreada:EventEmitter<Tareay>; 

  // A6 creando nuevaTarea sin olvidar importar arriba 
  nuevaTarea:Tareay;

  constructor() { 
    // A6 simplemente creo la instancia para trabajar 
    // y ahora ella yo puedo asignarsela donde yo quiera
    // puedo asignarla por ejemplo a cada uno de los campos de texto
    // porque tengo el ngModel
    this.nuevaTarea=new Tareay();

    // A9 
    this.tareaCreada=new EventEmitter();
  }

  ngOnInit(): void {
  }
  // A9 aqui tengo que hacer la emision del output avisarle al padre de que aqui
  // esta pasando algo y ademas pasarle los datos
  // Para generar el output la Mecanica es la siguiente
  onClick(){
    // emitiendo con el output que acabamos de crear llamar al metodo emit
    // y en este caso emitir la nueva tarea...nos vamos a app.component.html A10
    this.tareaCreada.emit(this.nuevaTarea);
    // si queremos borrar los campos de texto para que no se visualiza
    //  en nuevaTarea inicializamos un objeto nuevo de tipo tarea y se vaciar
    this.nuevaTarea=new Tareay();
  }
}
