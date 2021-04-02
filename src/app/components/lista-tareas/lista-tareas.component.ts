
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Tarea } from '../../models/Tarea.model';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  @Input() tarea: Tarea[];

  constructor() {

   }

  ngOnInit(): void {
   }

  actualizarTarea(ptarea: Tarea): void{
    ptarea.estado = !ptarea.estado;

  }

  borrarTarea(index): void{
    this.tarea.splice(index,1);
  }
  

}
