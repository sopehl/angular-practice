import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name:'server', type: 'server', content: 'Only single server', nodeCount: 0}];
  
  onServerCreated(serverEvent : {serverName: string, serverContent: string, nodeCount: number}) {
    this.serverElements.push({
      type: 'server',
      name: serverEvent.serverName,
      content: serverEvent.serverContent,
      nodeCount: serverEvent.nodeCount
    });
  }

  onBlueprintCreated(blueprintEvent : {serverName: string, serverContent: string, nodeCount: number}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintEvent.serverName,
      content: blueprintEvent.serverContent,
      nodeCount: blueprintEvent.nodeCount
    });
  }
}
