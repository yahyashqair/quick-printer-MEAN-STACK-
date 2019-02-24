import { Component, OnInit } from '@angular/core';
// import { FormControl,FormGroup } from '@angular/forms';
 import { FormBuilder,Validator, Validators } from '@angular/forms';
 import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submited:boolean = false ;

  constructor(private fb : FormBuilder,private loginservice : LoginService){}

  LoginForm =this.fb.group({
    email:['', Validators.required ],
    password:['', Validators.required]
  }) ; 


  // LoginForm=new FormGroup({
  //   email : new FormControl('Yshqair@asaltech.com'),
  //   password : new FormControl("")
  // });



  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.regForm.value);
    this.loginservice.login(this.LoginForm.value)
    .subscribe(
      response => {console.log('Success!', response) ;this.submited=true},
      error => console.error('Error!', error)
);  }
}
