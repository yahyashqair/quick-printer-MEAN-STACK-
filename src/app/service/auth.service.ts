import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  getToken() {
    return localStorage.getItem('token')
  }
  loggedOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
}

}
