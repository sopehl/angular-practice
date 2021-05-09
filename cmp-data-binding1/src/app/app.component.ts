import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name:'server', type: 'server', content: 'Only single server'}];
  
  onServerCreated(serverEvent : {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverEvent.serverName,
      content: serverEvent.serverContent
    });
  }

  onBlueprintCreated(blueprintEvent : {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintEvent.serverName,
      content: blueprintEvent.serverContent
    });
  }
}
