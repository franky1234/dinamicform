import { Input } from './input-form';

export class InputFieldCheck extends Input {

  typeForm = 'field-check';
  checked: boolean;

  constructor (
    checked?: boolean,
    label?: string,
    type?: string,
    name?: string,
    value?: string,
    disable?: boolean,
    min?: number,
    max?: number,
    maxLength?: number,
    minLength?: number,
    event?: string) {
    super(label, type, name, value, disable, min, max, event);
    this.checked = checked;
  }

}
