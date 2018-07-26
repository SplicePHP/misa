import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(){

  }
  hideHeader(){
    document.getElementsByTagName('ion-header')[0].style.display = "none";
  }
  showHeader(){
    document.getElementsByTagName('ion-header')[0].style.display = "block";
  }
}
