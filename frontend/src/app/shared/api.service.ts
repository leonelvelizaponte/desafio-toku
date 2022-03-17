import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
//import { Observable } from 'rxjs/rx';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlApi = 'localhost:3000';
  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    //console.log(this.randomId());
    return this.http.get(`http://${this.urlApi}/characters/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}`);
    //return this.http.get(`http://${this.urlApi}/characters/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}/${this.randomId()}`).subscribe(data => {
    //  console.log(data);
    //});
  }

  randomId(){
    return Math.floor(Math.random() * (731 - 1 + 1) + 1)
  }
  
}
