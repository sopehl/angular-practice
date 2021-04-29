import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName = ""

  serverStatus = ""

  isServerCreated = false

  status = ""

  constructor() {
    this.status = Math.random() > 0.5 ? "online" : "offline"
  }

  ngOnInit(): void {
  }

  onServerCreated(event: InputEvent) {
    this.isServerCreated = true
    if (!this.serverName) {
      this.isServerCreated = false
    }
    this.serverStatus = 'New server is created. Server name: ' + this.serverName;
  }

  getColor() {
    return this.status === "online" ? "green" : "red";
  }

}
