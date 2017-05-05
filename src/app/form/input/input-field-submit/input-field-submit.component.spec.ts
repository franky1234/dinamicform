import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldSubmitComponent } from './input-field-submit.component';

describe('InputFieldSubmitComponent', () => {
  let component: InputFieldSubmitComponent;
  let fixture: ComponentFixture<InputFieldSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
