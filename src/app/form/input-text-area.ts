export class InputTextArea {

  typeForm = 'field-text-area';
  label?: string;
  name?: string;
  rows?: string;
  cols?: string;
  required?: boolean;
  disabled?: boolean;
  event?: string;
  content?: string;
  constructor(
    label = 'Input-Text-Area',
    name = '', rows= '5',
    cols = '4',
    required = false,
    disabled = false,
    event = 'onclick()',
    content = '') {
    this.label = label;
    this.name = name;
    this.rows = rows;
    this.cols = cols;
    this.required = required;
    this.disabled = disabled;
    this.event = event;
    this.content = content;
  }
}
