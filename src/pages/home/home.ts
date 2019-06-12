import { Task } from './../../app/models/task';
import { TaskService } from '../../providers/task-service/task-service';
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Menu } from '../../app/models/menu-entry';

export enum SlideActions {
  View = "View",
  Done = "Done",
  Remove = "Remove",
}

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TaskService]
})
export class HomePage {
  public static TASK_ADD_PAGE = 'task-add';
  public static TASK_EDIT_PAGE = 'task-edit';
  tasks$: Observable<Task[]> = this.taskService.list();
  slidingItemMenu: Menu = { right: [
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
      label: 'Done',
      icon: 'email',
      id: SlideActions.Done
    }
  ],
    left: []
  };

  constructor(public navCtrl: NavController, private taskService: TaskService, private menu: MenuController) {}

  onSlidingItemMenuClick($event) {
    const {optionId, item} = $event;
    const task = item;
    switch(optionId) {
      case SlideActions.Done:
        this.setTaskDone(task);
        break;
      case SlideActions.Remove:
        this.removeTask(task);
        break;
      case SlideActions.View:
        this.viewTask(task);
        break;
      default:
        break;
    }
  }

  viewTask(task: Task) {
    this.openTaskDetails(task);
  }

  removeTask(task: Task) {
    this.taskService.delete(task.key);
  }

  setTaskDone(task: Task) {
    this.taskService.updateDoneStatus(task);
  }

  openTaskAdd() {
    this.openPage(HomePage.TASK_ADD_PAGE);
  }

  openTaskDetails(task: Task) {
    this.openPage(HomePage.TASK_EDIT_PAGE, {task});
  }

  openPage(page: string, params: any = {}) {
    this.navCtrl.push(page, params);
  }

  closeMenu() {
    this.menu.close();
  }
}
