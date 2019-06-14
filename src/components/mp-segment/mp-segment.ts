import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mp-segment',
  templateUrl: 'mp-segment.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MpSegmentComponent implements OnInit {
  @Input() form: Readonly<FormGroup>;
  @Input() name;
  @Input() required: boolean = false;

  @Input() buttons: [{value: any, label: string}];

  constructor() {}

  ngOnInit() {
    this.setValidators();
  }

  setValidators() {
//    ((this.form.get(this.name) as FormControl).setValidators([Validators.minLength(1), Validators.maxLength(30)]));
  }
}
