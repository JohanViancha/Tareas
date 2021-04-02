import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Tarea } from '../../models/Tarea.model';
@Component({
  selector: 'app-registrotarea',
  templateUrl: './registrotarea.component.html',
  styleUrls: ['./registrotarea.component.css']
})
export class RegistrotareaComponent implements OnInit {

  mitarea: Tarea;
  @Output() tarea:EventEmitter<Tarea>;
  
  constructor() {
    this.tarea = new EventEmitter();
    this.mitarea = new Tarea();
   }

  ngOnInit(): void {
  }

  enviar(){
    this.tarea.emit(this.mitarea);
    this.mitarea = new Tarea();
  }
}
