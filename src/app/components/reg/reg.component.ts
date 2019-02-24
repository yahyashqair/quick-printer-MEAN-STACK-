import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { RegService } from 'src/app/service/reg.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
  submited:boolean = false ;

  constructor(private fb : FormBuilder,private regservice : RegService){}

  regForm =this.fb.group({
    email:['', Validators.required ],
    username:['', Validators.required ],
    idnumber:['', Validators.required ],
    password:['', Validators.required]
  }) ; 

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.regForm.value);
    this.regservice.reg(this.regForm.value)
    .subscribe(
      response => {console.log('Success!', response) ;this.submited=true},
      error => console.error('Error!', error)
);  }

}
