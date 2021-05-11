import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // it's going to apply css which is written in css of this component globally. So it will remove style encapsulation then styles will be affected globally.
})
export class ServerElementComponent implements OnInit {

  @Input() element: {name: string, type: string, content: string};
  // @Input('srvElement') element: {name: string, type: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
