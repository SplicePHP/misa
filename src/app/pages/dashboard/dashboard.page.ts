import { Component } from '@angular/core';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {

  username: string = "initial value";
  prefilledText: string = "This is a test";
  constructor() {
    this.username = 'test';
  }
  

}
