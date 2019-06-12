import { Injectable } from '@angular/core';
import { Menu } from '../../app/models/menu-entry';

export enum SlideActions {
  View = "View",
  Done = "Done",
  Remove = "Remove",
}

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuProvider {
  constructor() {}

  getTaskMenu(doneLabel: string): Menu {
    return { right: [
      {
        color: 'primary',
        label: 'Remove',
        id: SlideActions.Remove,
        icon: 'email',
      },
      {
        color: 'secondary',
        label: 'View',
        id: SlideActions.View,
        icon: 'email',
      },
      {
        color: 'secondary',
        label: doneLabel,
        icon: 'email',
        id: SlideActions.Done
      }
    ],
      left: []
    };
  }
}
