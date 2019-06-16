import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the BaseModelPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
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
