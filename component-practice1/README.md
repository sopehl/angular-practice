# ComponentPractice1

- Angular cannot scan all component automatically, we need to tell new component to Angular to detect them. To detect the component, add the component name to @NgModule's declarations properties array.

- To generate component -> `ng generate component <component-name>` for short command `ng g c <component-name>`. After this command, all definitions are done by CLI tool like adding component name to app.module.ts etc.

- To define component template, we can use the `templateUrl: <relative-path>` in .ts files. Alternatively, we can use `template: <h1>my header</h1>` as inline html template definition in ts file.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
```