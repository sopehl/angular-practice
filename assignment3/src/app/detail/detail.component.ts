import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  clickCount = 0;

  buttonClickLogs = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayButtonClicked() {
    this.clickCount++;
    var log = new Date() + " - clicked " + this.clickCount + " times." 
    this.buttonClickLogs.push(log);
  }

  getParStyle() {
    return this.clickCount % 2 == 1 ? "" : "none";
  }

  getLogStyleOfBackground() {
    return this.clickCount > 4 ? "blue" : "transparent";
  }
}
