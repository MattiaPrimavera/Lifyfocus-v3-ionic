import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'mp-input',
  templateUrl: 'mp-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MpInputComponent implements OnInit {
  @Input() form: Readonly<FormGroup>;
  @Input() placeholder: string = 'placeholder';
  @Input() text = 'city';
  @Input() name;
  @Input() required: boolean = false;
  @Input() type = 'text';

  constructor() {}

  ngOnInit() {
    this.setValidators();
  }

  setValidators() {
    ((this.form.get(this.name) as FormControl).setValidators([Validators.minLength(1), Validators.maxLength(30)]));
  }
}
