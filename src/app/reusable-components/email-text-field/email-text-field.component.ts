import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email-text-field',
  templateUrl: './email-text-field.component.html',
  styleUrl: './email-text-field.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailTextFieldComponent),
      multi: true
    }
  ]
})
export class EmailTextFieldComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() type: string = 'email';
  @Input() value: any = '';
  @Input() name: string = '';
  @Input() label: string = '';

  internalValue: any;

  private onChange = (_: any) => { };
  private onTouched = () => { };

  writeValue(value: any): void {
    this.internalValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onModelChange(value: any): void {
    this.onChange(value);
    this.onTouched();
  }
}
