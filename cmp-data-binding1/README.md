# CmpDataBinding1

## @Input() decorator
-   It provide to expose(binding) the property of component explicitly by putting before property.
-   If you want to bind with the alternative naming for property in TS file, you can use like @Input('srvElement') instead.

## @Output decorator
-   It provides the custom event to be used by other components. In other words, It serves the properties by emitting with the JS object(probably contains its own properties) which is specified by the developer.
-   Alias(alternative naming of custom event or property) is the same as above in Input decorator. @Output('bpCreated')

## View Encapsulation
-   Every CSS of component will effect their own components. In app.component.css file, there is p tag styling color cyan but it doesn't effect the templates which belong to parent. Every component elements have the same attribute to be evaluated the DOM by Angular. These attributes can seem stanger string. tag's attribute(like: _ngcontent-rpm-c41) as follows in css.

```html
p[_ngcontent-act-c41] {
    color: blue;
}

```

## Encapsulation strategies

- It changes the encapsulation style strategies as following comments. 'ViewEncapsulation.Emulated' is default.

```typescript
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // it's going to apply css which is written in css of this component globally. So it will remove style encapsulation then styles will be affected globally. 'ViewEncapsulation.ShadowDom' provides the shadow dom to encapsulate styles.
})
export class ServerElementComponent implements OnInit {

  @Input() element: {name: string, type: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
```

## Local varible in HTML templates

- We can define local varible like as follow. 'serverNameInputElement' can only be used in the html template as you see onAddServer(serverNameInputElement) function in TS file.

```html
<input type="text" class="form-control" #serverNameInputElement>

<button
        class="btn btn-primary"
        (click)="onAddServer(serverNameInputElement)">Add Server</button>
```

```typescript
onAddServer(serverInput) {
    console.log(serverInput);
    this.serverCreated.emit({serverName: serverInput.value, serverContent: this.newServerContent});
  }
```