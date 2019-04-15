import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'home';
  tab2Root = 'objectives';
  tab3Root = 'contacts';

  constructor() {
  }
}
