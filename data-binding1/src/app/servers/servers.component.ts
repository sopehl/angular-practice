import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isDisabled = true

  serverAddedStatus = "No any server"

  serverName = "";

  constructor() { 
    setTimeout(() => {
      this.isDisabled = false
      console.log("Button is enabled")
    }, 2000);
  }

  ngOnInit(): void {
  }

  onServerChanged() {
    this.serverAddedStatus = "Server Added"
  }

  updateServerName(event: InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
