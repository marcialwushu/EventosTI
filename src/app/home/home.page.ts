import { Component } from '@angular/core';
import { EventosService } from './../services/eventos.service';
import { EVENTOS } from '../services/mock-eventos';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hideMe=false;
  //list of events
  eventosData: any;
  // _evento = [];
  public _evento: Array<{}> = [];

  constructor(public eventosService: EventosService) {
    //set sample data
    // this.eventosData = [];
  }

  get eventos(){
    return this._evento = EVENTOS;
  }

  ngOnInit() {
    debugger;
    this._evento = EVENTOS;
    console.log(EVENTOS)
  }

  getAllEventos(){
    this.eventosService.getAll().subscribe(response => {
      this.eventosData = response;
    })
  }

  hide(){
    this.hideMe = true;
  }

}
