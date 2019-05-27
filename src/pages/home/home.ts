import { Task } from './../../app/models/task';
import { TaskListService } from './../../providers/task-list-service/task-list-service';
import { MockProvider } from './../../providers/mock/mock';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs';
import { MenuEntry } from '../../app/models/menu-entry';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks$: Observable<Task[]>
  menu: MenuEntry[];

  constructor(public navCtrl: NavController, private mock: MockProvider, private taskListService: TaskListService) {
    this.tasks$ = this.taskListService.getTasks()
    this.menu = [{
      color: 'primary',
      label: 'Remove',
      icon: 'email'
    }]
  }

  openTaskAdd() {
    this.openPage('task-add');
  }

  openTaskDetails(task) {
    this.openPage('task-edit', {task});
  }

  openPage(page: string, params: any = {}) {
    this.navCtrl.push(page, params);
  }
}
