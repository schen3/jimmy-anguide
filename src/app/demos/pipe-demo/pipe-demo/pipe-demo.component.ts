import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ja-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {

  pipeDemoText: string = 'Hello Jimmy!';

  constructor() { }

  ngOnInit() {
  }

}
