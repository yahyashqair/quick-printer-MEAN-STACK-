import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegService {
  _url='http://localhost:3000/reg';
  constructor(private http: HttpClient) { }

  reg(userData){
    return this.http.post<any>(this._url,userData);
  }
  list(){
    return this.http.get<any>(this._url);
  }
}
