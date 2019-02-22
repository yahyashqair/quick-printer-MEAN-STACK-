import { Component, OnInit } from '@angular/core';
// import { FormControl,FormGroup } from '@angular/forms';
 import { FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder){}

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

}
