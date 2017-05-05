import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent implements OnInit {
  @Input() inputSelectOption;
  constructor() { }

  ngOnInit() {
  }
  selectionChanged($event) {
    console.log('$event:', $event);
  }
}
