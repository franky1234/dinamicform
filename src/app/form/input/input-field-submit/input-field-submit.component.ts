import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field-submit',
  templateUrl: './input-field-submit.component.html',
  styleUrls: ['./input-field-submit.component.css']
})
export class InputFieldSubmitComponent implements OnInit, OnChanges {

  @Input() inputSubmit;
  @Output() sendSaveData = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  onSaveSubmit() {
    console.log('onSubmit + Saving..');
    this.sendSaveData.emit(true);
  }
}
