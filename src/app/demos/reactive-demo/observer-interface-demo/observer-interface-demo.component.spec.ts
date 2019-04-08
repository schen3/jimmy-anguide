import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverInterfaceDemoComponent } from './observer-interface-demo.component';

describe('ObserverInterfaceDemoComponent', () => {
  let component: ObserverInterfaceDemoComponent;
  let fixture: ComponentFixture<ObserverInterfaceDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverInterfaceDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverInterfaceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
