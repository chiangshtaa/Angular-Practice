import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {
    console.log('Data Service connected...');
  }

  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
      // .map(res => res.json);
  }
}
