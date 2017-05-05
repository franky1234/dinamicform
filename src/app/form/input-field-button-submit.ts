import { Input } from './input-form';

export class InputButtonSubmit extends Input {
  typeForm = 'field-button';
  label: string;
  event: string;
  constructor (
    label?: string,
    type?: string,
    name?: string,
    value?: string,
    disable?: boolean,
    event?: string
    ) {
    super(label, type = 'button', name, value, disable, 0, 0, event);
  }
}
