import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFieldComponent),
      multi: true
    }
  ]
})
export class PasswordFieldComponent implements ControlValueAccessor {

  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() name: string = '';
  @Input() label: string = '';

  internalValue: string = '';
  showPassword: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.internalValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onModelChange(value: any): void {
    this.onChange(value);
    this.onTouched();
  }

}
