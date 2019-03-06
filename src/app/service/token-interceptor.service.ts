import { Injectable,Injector } from '@angular/core';
import {   AuthService} from './auth.service';

import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} 

from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let auth = this.inject.get(AuthService);
    
    let token = req.clone({   setHeaders :{ Authorization :`Bearer ${auth.getToken()}`} });
    return next.handle(token);
  }

}