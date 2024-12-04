import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() id!: string;
  @Input() errors!: { [key: string]: string };

  getErrorKeys(): string[] {
    console.log(this.control.errors)
    return Object.keys(this.control.errors || {});
  }
}
