import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic-component';

/**
 * Generated class for the DynamicTaskListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dynamic-task-list',
  templateUrl: 'dynamic-task-list.html'
})
export class DynamicTaskListComponent extends DynamicComponent {
  constructor () {
    super();
  }
}
