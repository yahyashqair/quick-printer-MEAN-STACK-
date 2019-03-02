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
    email:['', [Validators.required,Validators.email]],
    username:['', Validators.required ],
    idnumber:['', Validators.required ],
    password:['', [Validators.required,Validators.minLength(6)]]
  }) ; 

  ngOnInit() {
  }
  list:String ="...";
  Check:Object={"msg":'no'};
  name:String =" "; 


  listing(){
   this.regservice.list() .subscribe(
    response => {this.list=JSON.parse(response) ;},
    error => console.error('Error!', error));
  }
  onSubmit(){
    // console.log(this.regForm.value);
    this.regservice.reg(this.regForm.value)
    .subscribe(
      response => {console.log('Success!', response) ;this.Check=response;  if(response['msg']=="yes"){
        this.submited=true;
        console.log("done1");
      }
    },
      error => console.error('Error!', error)
); 
      this.listing();
      this.success();
}

success(){
  if(this.Check['msg']=="yes"){
    this.submited=true;
    console.log("done1");
  }
  console.log("done2");

}


}
