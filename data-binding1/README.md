# DataBinding1(Including event binding)

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

## Event Binding

- To bind event in html page we used normally as follows:

```html
<button onClick="myFunction()"></button>
```

> myFunction is defined in the vanilla JS file or between </script> tags inline.

- With the Angular notation, we can define event binding as follows:

```html
<button (click)="myFunction()"></button>
```

> myFunction has been defined in regarding TS file we manage the template. As a side note, we can guess the correct event with the paranthesis in Angular. (click) event instead of onClick or (change) event instead of (onChange).

- To emit the data from html events to ts side to print data or process whatever you want on it, we use the very important reserved varible `$event`. In the practice follow the lines.

```html
<input 
    class="form-control"
    (input) = "updateServerName($event)"/>
```

- In the following line, to capture the input event, we may pass the `InputEvent` as an argument. Now, we can get the input value which is keystroked by the our users. But there is a stranger thing in the body of function HTMLInputElement casting the target.
```typescript
  updateServerName(event: InputEvent) {
    this.serverName = (<HTMLInputElement>event.target).value
  }
```

> Side Note: Event binding from html temp. to TS file, Property binding from ts to html, Two-Way binding combine both of them.

- When we bind the value and change it, it will be automatically changed in html side and ts side both.