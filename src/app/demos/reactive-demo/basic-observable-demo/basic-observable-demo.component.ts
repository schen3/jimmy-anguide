import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ja-basic-observable-demo',
  templateUrl: './basic-observable-demo.component.html',
  styleUrls: ['./basic-observable-demo.component.scss']
})
export class BasicObservableDemoComponent implements OnInit {

  numbersObservable: Observable<any>;
  numbers: Array<number> = [];

  constructor() { }

  ngOnInit() {
    this.numbersObservable = of(1,2,3);
  }

  doubleSubscription() {
    this.numbersObservable.subscribe(number => {this.numbers = this.numbers.concat(number);});
    this.numbersObservable.subscribe(number => {this.numbers = this.numbers.concat(number);});
  }
}
