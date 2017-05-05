import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldCheckComponent } from './input-field-check.component';

describe('InputFieldCheckComponent', () => {
  let component: InputFieldCheckComponent;
  let fixture: ComponentFixture<InputFieldCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
