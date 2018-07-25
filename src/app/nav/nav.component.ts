import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }
  
  changeRoute(routeValue) {
    // this._LoaderService.show(); 
    //this will start the loader service.
 
    this.router.navigate([routeValue]); 
    // you have to check this out by passing required route value.
    // this line will redirect you to your destination. By reaching to destination you can close your loader service.
    // please note this implementation may vary according to your routing code.
 
 }

  ngOnInit() {
  }

}

