import { Component, OnInit } from '@angular/core';
import { NewRequestService } from 'src/app/service/new-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private newRequest:NewRequestService) { }
  users=[];
  ngOnInit() {
    this.newRequest.getUsers().subscribe(
      res => this.users=res['response'],
      err => console.log(err)
    )
  }

}
