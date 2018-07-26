import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiKey:string = '';
  url:string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
    console.log('Hello From Users Provider');
    // this.url = ''+this.apiKey+'';
  }

  getUsers(){
    return this.http.get(this.url+`/users`);
  }
}
