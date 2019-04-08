import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicastObservableDemoComponent } from './unicast-observable-demo.component';

describe('UnicastObservableDemoComponent', () => {
  let component: UnicastObservableDemoComponent;
  let fixture: ComponentFixture<UnicastObservableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicastObservableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicastObservableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
