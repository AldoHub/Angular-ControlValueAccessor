import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true
    }
  ]
})
export class PhoneInputComponent implements ControlValueAccessor {

  @Input() data:string = "";
  onChangeCb?: (val: any) => void;
  onTouchedCb?: () => void;
  isDisabled:boolean = false;

  constructor() { }

  //sets the text using the keyup
  setText(ev: Event):void {
      const val = (ev.target as HTMLInputElement).value;
      this.data = val;
      this.onChangeCb?.(val);
  }

   // Inside CustomInputComponent class
  writeValue(value: any): void {
    // Set the value of your custom control element
    this.data = value;
  }

  registerOnChange(fn: any): void {
    // Register the callback for value
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    // Register the callback for touch events
    this.onTouchedCb = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Disable or enable your custom control
    this.isDisabled = isDisabled;
  }

}
