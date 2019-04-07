import { Component, Input } from '@angular/core';

@Component({
  selector: 'ja-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input() type: string = 'info';

  constructor() { }

  getClass() {
    return `ja-message--${this.type}`;
  }
}
