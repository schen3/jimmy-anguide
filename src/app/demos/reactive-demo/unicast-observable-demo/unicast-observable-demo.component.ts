import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';

@Component({
  selector: 'ja-unicast-observable-demo',
  templateUrl: './unicast-observable-demo.component.html',
  styleUrls: ['./unicast-observable-demo.component.scss']
})
export class UnicastObservableDemoComponent implements OnInit {

  intervalObservable: Observable<any>;
  dateObserver1: Observer<any>;
  person1 = {};
  person2 = {};

  constructor() { }

  ngOnInit() {
    this.intervalObservable = interval(500);
  }

  subscribeToInterval(person) {
    person.subscribed = true;
    this.intervalObservable.subscribe(seconds => {
      person.seconds = seconds;
    });
  }

}
