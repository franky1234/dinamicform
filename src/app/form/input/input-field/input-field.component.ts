import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { InputComponent } from '../input.component';
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit , OnChanges{
  @Input() inputField;
  constructor() {
   }
   ngOnChanges() {
   }
  ngOnInit() {
  }
}
