import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre:string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
 
  
  nuevo: Personaje = {
    nombre: 'Maestro Rhosi',
    poder: 234423
  }
 
 
  constructor () {}
}
