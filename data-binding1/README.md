# DataBinding1

- To send data(class varibles or data returned by func.) from TS side to html template, use the string interpolation with {{}}. The string interpolation can contain TS expressions not whole TS code.

- one of the most powerfull feature in Angular is the binding properties(from ts to html file). To bind the properties, we are using the square bracket by enclosing the properties of DOM like as follow. isAllowed value has been bound to html file we used as a template. If the isAllowed value is changed, the disabled property of button is gonna be changed at the same time.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isAllowed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
```

```html
<button [disabled]="isAllowed">Click me! :)</button>
```

- To output some data, use the string interpolation. "innerHtml" is the same like vanilla js "element.innerHtml" to set value.

```html
<p>{{isAllowed}}</p>
<p [innerHtml]="isAllowed"></p>
```