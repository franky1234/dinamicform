export class InputFieldSelect {

  typeForm = 'field-select';
  label?: string;
  name?: string;
  size?: number;
  required?: boolean;
  disabled?: boolean;
  event?: string;
  options?: any[];
  content: string;
  constructor(
    label= 'Input-Field-Select',
    name = '',
    size= 0,
    required = false,
    disabled = false,
    event = 'onclick()',
    content = '') {
      this.options  = [{
        name: '',
        value: '',
        disabled: false,
        required: false}];
    this.label = label;
    this.name = name;
    this.size = size;
    this.required = required;
    this.disabled = disabled;
    this.content = content;
  }
}
