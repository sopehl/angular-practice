import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  element: {name: string, type: string, content: string};
  // @Input('srvElement') element: {name: string, type: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}