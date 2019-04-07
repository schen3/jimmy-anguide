import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListenerDemoComponent } from './host-listener-demo.component';

describe('HostListenerDemoComponent', () => {
  let component: HostListenerDemoComponent;
  let fixture: ComponentFixture<HostListenerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostListenerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostListenerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
