import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[jaOnClickAction]'
})
export class OnClickActionDirective {

  @Input('jaOnClickAction') actionHandler;

  constructor() { }

  @HostListener('click', ['$event.target']) 
  handlerAction(target) {
    if (typeof this.actionHandler === 'function') {
      this.actionHandler(target);
    }
  }
}
