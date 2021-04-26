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

- There is the same approach to styling like template and templateUrl. It could be used like style and styleUrl(with relative-path)

## selector

- If you want your our templated dectected by Angular, we can use the the selectors. In the default selectors in xxx.component.ts file has been created like `selector: "app-component"` then we can use this tamplate by using `<app-component></app-component>` tags.

- You want the Angular detect your component by using the attribute, we need to define selector like as follow. Focus to selector property of @Component decorator

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
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

- And then we can reach the component by using `<div app-servers></div>`
- Beside that, if we want to select the template by using css, it's going to be `selector: '.app-servers'`. Then in the the place this template is used, you will see `<div class='app-servers'></div>`