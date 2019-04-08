import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'ja-observer-interface-demo',
  templateUrl: './observer-interface-demo.component.html',
  styleUrls: ['./observer-interface-demo.component.scss']
})
export class ObserverInterfaceDemoComponent implements OnInit {

  numbersObservable: Observable<number>;
  numbers: Array<number> = [];

  constructor() { }

  ngOnInit() {
    this.createNumbersObservable();
  }

  createNumbersObservable() {
    const observableFn = observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
      return {
        unsubscribe(){console.log('unsubscribed')}
      };
    }
    this.numbersObservable = new Observable(observableFn);
  }

  subscribe() {
    const numbersObserver: Observer<number> = {
      next: number => {this.numbers.push(number)},
      error: () => {},
      complete: () => {console.log('completed')}
    };
    this.numbersObservable.subscribe(numbersObserver);
  }

}
