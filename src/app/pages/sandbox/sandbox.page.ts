import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage implements OnInit {

  user: {
    username:string
  };
  username: string = "initial value";
  prefilledText: string = "This is a test";
  users$: Object;

  constructor(
    public navCtrl: NavController,
    private data: DemoService,
    private storage: Storage,
    private router: Router
  ) {
    this.username = 'test';
  }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
    this.storage.get('user').then((val)=>{
      if(val != null){
        console.log(val);
        this.user = JSON.parse(val);
      } else {
        this.user = {
          username: "New User"
        };
      }
    });
  }

  setUser(){
    this.storage.set('user', JSON.stringify(this.user));
    // this.navCtrl.(SandboxPage);
    // this.router.navigate(['home']);
  }

  ionViewWillEnter(){
    console.log('entered');
  }
}
