import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  LoginForm=new FormGroup({
    email : new FormControl('Yshqair@asaltech.com'),
    password : new FormControl("")
  });
}
