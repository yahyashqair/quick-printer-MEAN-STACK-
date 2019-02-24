import { Component, OnInit } from '@angular/core';
 import { FormBuilder,Validator, Validators } from '@angular/forms';
 import { LoginService } from 'src/app/service/login.service';
 import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submited:boolean = false ;

  constructor(private fb : FormBuilder,private loginservice : LoginService,private toastr: ToastrService){}

  LoginForm =this.fb.group({
    email:['', [Validators.required ,Validators.email]],
    password:['', [Validators.required,Validators.minLength(8)]]
  }) ; 

  ngOnInit() {
  }

  onSubmit(){
    this.loginservice.login(this.LoginForm.value)
    .subscribe(
      response => {console.log('Success!', response) ;this.submited=true},
      error => console.error('Error!', error)
);  }

 
showSuccess() {
   this.toastr.success('Hello world!', 'Toastr fun!');
}

}
