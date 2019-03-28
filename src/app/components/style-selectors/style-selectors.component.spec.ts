import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSelectorsComponent } from './style-selectors.component';

describe('StyleSelectorsComponent', () => {
  let component: StyleSelectorsComponent;
  let fixture: ComponentFixture<StyleSelectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleSelectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
