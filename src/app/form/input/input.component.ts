import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() customInput;
  @Output() actualContentForm = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Generic:', this.customInput);
  }
  sendEventToForm() {
    this.actualContentForm.emit(true);
  }
}
