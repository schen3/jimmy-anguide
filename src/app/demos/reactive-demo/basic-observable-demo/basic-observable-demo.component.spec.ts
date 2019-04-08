import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicObservableDemoComponent } from './basic-observable-demo.component';

describe('BasicObservableDemoComponent', () => {
  let component: BasicObservableDemoComponent;
  let fixture: ComponentFixture<BasicObservableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicObservableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicObservableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
