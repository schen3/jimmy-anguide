import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'ja-multicast-observable-demo',
  templateUrl: './multicast-observable-demo.component.html',
  styleUrls: ['./multicast-observable-demo.component.scss']
})
export class MulticastObservableDemoComponent implements OnInit {

  intervalObservable: Observable<any>;
  dateObserver1: Observer<any>;
  person1 = {};
  person2 = {};

  constructor() { }

  ngOnInit() {
    this.intervalObservable = interval(500).pipe(share());
  }

  subscribeToInterval(person) {
    person.subscribed = true;
    this.intervalObservable.subscribe(seconds => {
      person.seconds = seconds;
    });
  }

}
