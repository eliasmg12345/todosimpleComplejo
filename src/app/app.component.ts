import { Component } from '@angular/core';
import { Tareay } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // A11
  arrTareas:Tareay[];

  constructor(){
    // A11 inicializo un array vacio  
    this.arrTareas=[];
  }
  
  // A11 vamos a ir almacenandolas cerando unarray de tareas
  onTareaCreada($event: any){
    this.arrTareas.push($event);  //estoy recibiendo dentro del padre todas las tareas
                                  // que se estan generando a partir del formulario
  // el siguiente paso es a la lista poder pasarle esta serie de tareas
  // para ello hacemos un input sobre la lista  nos vamos al ts de lista A12

  }
}
