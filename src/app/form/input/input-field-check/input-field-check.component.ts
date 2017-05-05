import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-field-check',
  templateUrl: './input-field-check.component.html',
  styleUrls: ['./input-field-check.component.css']
})
export class InputFieldCheckComponent implements OnInit, OnChanges {
  @Input() inputFieldCheck;
  constructor() {
   }

  ngOnInit() {
  }

  ngOnChanges() {
  }
  setCheckStatus() {
    this.inputFieldCheck.checked = !this.inputFieldCheck.checked;
  }
}
