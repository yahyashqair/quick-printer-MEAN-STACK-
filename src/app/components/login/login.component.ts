import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submited: boolean = false;

  constructor(private fb: FormBuilder, private loginservice: LoginService, private toastr: ToastrService,private router:Router) { }

  LoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  ngOnInit() {
  }

  name:String ="";

  onSubmit() {
    this.loginservice.login(this.LoginForm.value)
      .subscribe(
        response => { console.log('Success!', response); this.submited = true;
        localStorage.setItem('token',response.token);
        this.router.navigate(['']);
      },
        error => console.error('Error!', error)
      );
  }


  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
