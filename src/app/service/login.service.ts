import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url='http://localhost:3000/login';
  constructor(private http: HttpClient) { }

  login(userData){
    return this.http.post<any>(this._url,userData);
  }
}
