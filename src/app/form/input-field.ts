import { Input } from './input-form';

export class InputField extends Input {
  typeForm = 'field';
  maxLength: number;
  minLength: number;
  required: boolean;
  event: string;
  constructor (
    required?: boolean,
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
    this.required = required;
  }
}
