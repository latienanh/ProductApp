import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() id!: string;
  @Input() errors!: { [key: string]: string };
  @Input() placeholder?: string = "Nhập thông tin";
  @Input() showErrors = false;
  @Input() type?: string = 'text';  // New input type (can be 'text' or 'password')

  getErrorKeys(): string[] {
    return Object.keys(this.control.errors || {});
  }

  isInvalid(): boolean {
    console.log(this.control?.dirty || this.showErrors)
    return this.control?.dirty || this.showErrors;
  }
}
