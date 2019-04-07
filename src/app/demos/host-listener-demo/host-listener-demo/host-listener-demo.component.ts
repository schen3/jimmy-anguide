import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'ja-host-listener-demo',
  templateUrl: './host-listener-demo.component.html',
  styleUrls: ['./host-listener-demo.component.scss']
})
export class HostListenerDemoComponent {

  private initialDemoText: string = 'Pass your hot cursor over me!';
  demoText: string = this.initialDemoText;

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    const time = new Date().getSeconds();
    this.demoText = `Mouse enter on: <${target.localName}> at the ${time} second`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.demoText = this.initialDemoText;
  }

  constructor() { }
  
}
