import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  username = ""

  constructor() { }

  ngOnInit(): void {
  }

  onClickUsernameReset() {
    this.username = ""
  }

}
