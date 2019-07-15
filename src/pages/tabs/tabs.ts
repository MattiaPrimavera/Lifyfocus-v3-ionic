import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  boardTab = 'home';
  tasksTab = 'tasks';
  objectivesTab = 'objectives';

  constructor() {
  }
}
