import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'anguide-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() options = [];

  constructor() { }

  ngOnInit() {
  }

}
