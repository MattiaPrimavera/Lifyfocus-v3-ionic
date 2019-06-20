import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This component provides the base frame for `${model}Add` & `${model}Edit`
 * pages:
 *
 * - styled header with `validate` button
 * - optional `remove` button
 */
@Component({
  selector: 'base-model-page',
  templateUrl: 'base-model-page.html'
})
export class BaseModelPageComponent {
  @Input() title: string;
  @Input() showRemove: boolean = false;
  @Output('save') onSave = new EventEmitter();
  @Output('remove') onRemove = new EventEmitter();

  remove() {
    this.onRemove.emit();
  }

  save() {
    this.onSave.emit();
  }
}
