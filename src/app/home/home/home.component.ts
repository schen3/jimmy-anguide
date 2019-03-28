import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anguide-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  title = 'angular-guide';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    setTimeout(() => {
      //window['PR'].prettyPrint();
    })
  }
}
