import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ja-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  title = 'JIMMY Anguide';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    setTimeout(() => {
      //window['PR'].prettyPrint();
    })
  }
}
