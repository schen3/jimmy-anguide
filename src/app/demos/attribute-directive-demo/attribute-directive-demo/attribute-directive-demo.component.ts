import { Component } from '@angular/core';

@Component({
  selector: 'ja-attribute-directive-demo',
  templateUrl: './attribute-directive-demo.component.html',
  styleUrls: ['./attribute-directive-demo.component.scss']
})
export class AttributeDirectiveDemoComponent {

  isUpperCase: boolean = false;

  constructor() { }

  alertInnerHTML(event: any = {}) {
    alert(event.innerHTML);
  }

  logInnerHTML(event: any = {}) {
    console.log(event.innerHTML);
  }

  toggleInnerHTML(event: any = {}) {
    event.innerHTML = this.isUpperCase ? 
      event.innerHTML.toLowerCase() : event.innerHTML.toUpperCase();
    this.isUpperCase = !this.isUpperCase;
  }
}
