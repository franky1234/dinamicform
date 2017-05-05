export class Input {
  typeForm = 'input-form';
  label: string;
  type: string;
  name: string;
  value: string;
  disable: boolean;
  min: number;
  max: number;
  event: string;
  constructor(label= '', type = '', name= '', value = '' , disable = false , min = 0, max = 0 ,  event= 'onclick()') {
    this.event = event;
    this.label = label;
    this.type = type;
    this.name = name;
    this.value = value;
    this.disable = disable;
    this.min = min;
    this.max = max;
  }
}
