import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string, nodeCount: number}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string, nodeCount: number}>();

  @ViewChild('serverNodeCount') nodeCount: ElementRef;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInput) {
    console.log(serverInput);
    console.log(this.nodeCount);
    this.serverCreated.emit({serverName: serverInput.value, serverContent: this.newServerContent, nodeCount: this.nodeCount.nativeElement.value});
  }

  onAddBlueprint() {
    console.log(this.nodeCount);
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent, nodeCount: this.nodeCount.nativeElement.value});
  }

}
