import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastObservableDemoComponent } from './multicast-observable-demo.component';

describe('MulticastObservableDemoComponent', () => {
  let component: MulticastObservableDemoComponent;
  let fixture: ComponentFixture<MulticastObservableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticastObservableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticastObservableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
