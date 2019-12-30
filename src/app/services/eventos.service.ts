import { Injectable } from '@angular/core';
import { EVENTOS } from './mock-eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private eventos: any;

  constructor() { 
    this.eventos = EVENTOS;
  }

  getAll() {
    return this.eventos;
  }

  getItem(id) {
    for (var i = 0; i < this.eventos.length; i++) {
      if(this.eventos[i].id === parseInt(id)) {
        return this.eventos[i];
      }
    }
    return null;
  }

  remove(item) {
    this.eventos.splice(this.eventos.indexOf(item), 1);
  }
}
