import { Component, Input, OnInit } from '@angular/core';
import { Tareay } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // A12 generando el input que se llame tareas el tipo sera un array de tareay[]
  // esta comunicacion de padre e hijo el unico sitio donde podemos hacerlo es
  // en el app.component.hmtl A13
  @Input() tareas:Tareay[];
  constructor() { 
    this.tareas=[];
  }

  ngOnInit(): void {
  }

  // A16 aqui le paso la tarea que ademas le puedo poner que es de tipo Tareay
  onClick(pTarea:Tareay){
    // cambiando 
    pTarea.completa=!pTarea.completa;

  }
  // A18 del array tareas  que es el mismo que esta en el padre vamos a borrarlo
  // llamando al metodo splice y le pasamos en que indice va empezar (indice)  y
  // cuantos queremos que borre en este caso 1  
  onClickBorrar(indice:any){
     this.tareas.splice(indice,1);  
  }

}
