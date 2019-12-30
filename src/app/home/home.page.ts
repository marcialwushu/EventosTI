import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hideMe=false;

  constructor() {}

  hide(){
    this.hideMe = true;
  }

}
