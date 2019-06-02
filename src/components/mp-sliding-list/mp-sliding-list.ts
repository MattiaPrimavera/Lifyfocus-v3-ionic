import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuEntry } from '../../app/models/menu-entry';

/**
 * Generated class for the MpSlidingListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mp-sliding-list',
  templateUrl: 'mp-sliding-list.html'
})
export class MpSlidingListComponent {
  @Input('items') items$: Observable<any[]>;
  @Input('menu') menu: MenuEntry[];
  @Output('itemClick') onClick = new EventEmitter();
  @Output('optionClick') onOptionClick = new EventEmitter();

  onItemClick(item: any) {
    this.onClick.emit(item);
  }

  onOptionClicked($event) {
    this.onOptionClick.emit($event);
  }
}
