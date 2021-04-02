import { Component, OnInit } from '@angular/core';
import { Tarea } from './models/Tarea.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tarea: Tarea[];
  constructor(){
    this.tarea = [];
  }

  OnInit(){

  }

  regisrar_tarea($event){ 
    this.tarea.push($event);
  }
}
