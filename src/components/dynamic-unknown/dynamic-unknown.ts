import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic-component';

/**
 * Generated class for the DynamicUnknownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dynamic-unknown',
//  templateUrl: 'dynamic-unknown.html'
  template: `<div>Unknown component ({{context?.text}})</div>`
})
export class DynamicUnknownComponent extends DynamicComponent {
}
