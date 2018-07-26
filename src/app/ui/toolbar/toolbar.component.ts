import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private navCtrl: NavController) { }
  
  navTo(routeValue) {
    // this._LoaderService.show(); 
    //this will start the loader service.
 
    this.navCtrl.goRoot(routeValue);
    

    // you have to check this out by passing required route value.
    // this line will redirect you to your destination. By reaching to destination you can close your loader service.
    // please note this implementation may vary according to your routing code.
 
  }
  showOptions(){

  }

  ngOnInit() {
  }

}
