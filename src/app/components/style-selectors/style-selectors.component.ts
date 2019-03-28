import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anguide-style-selectors',
  templateUrl: './style-selectors.component.html',
  styleUrls: ['./style-selectors.component.scss']
})
export class StyleSelectorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    setTimeout(() => {
      window['PR'].prettyPrint();
    })
  }
}
