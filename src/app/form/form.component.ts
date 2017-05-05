import { Component, OnInit, OnChanges } from '@angular/core';
import { InputField } from './input-field';
import { InputFieldCheck } from './input-field-check';
import { InputButtonSubmit } from './input-field-button-submit';
import { InputTextArea } from './input-text-area';
import { InputFieldSelect } from './input-field-select';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  listInputs: any = [];
  defaultInputs = [
    new InputField(false, 'Input-Field'),
    new InputFieldCheck(false, 'Input-Field-Check'),
    new InputButtonSubmit('Input-Submit-Button'),
    new InputTextArea(),
    new InputFieldSelect()
  ];
  arrayInputOptions: any = [
  ];
  none = null;
  textJson = '';
  showResults: any = null;
  constructor() { }

  ngOnInit() {
    this.fillOptions();
  }
  fillOptions() {
    this.defaultInputs.forEach( input => {
      this.arrayInputOptions.push(input);
    });
  }
  selectionChanged($event) {
    if ($event !== 0 ) {
      this.textJson = JSON.stringify($event, null, '\t');
    }
  }
  addInputElement() {
      const newObjectInput = JSON.parse(this.textJson);
      if (newObjectInput.type !== '') {
        this.listInputs.push(newObjectInput);
      }
      this.textJson = '';
  }
  recieveInfo($event) {
    if ($event === true) {
      this.showResults = this.listInputs;
    }
  }
}
