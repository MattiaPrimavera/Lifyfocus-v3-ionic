import { Task } from './../../app/models/task';
import { TaskService } from '../../providers/task-service/task-service';
import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Menu } from '../../app/models/menu-entry';
import { SlideActions, MenuProvider } from '../../providers/menu/menu';

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
  tasks$: Observable<Task[]> = this.taskService.list()
    .switchMap((tasks: Task[]) => {
      return Observable.of(tasks.filter(task => task.done === false));
    });
  slidingItemMenu: Menu = this.menuService.getTaskMenu('Done');

  constructor(
    private menuService: MenuProvider,
    public navCtrl: NavController,
    private taskService: TaskService,
    private menu: MenuController) {}

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
        this.openTaskUpdate(task);
        break;
      default:
        break;
    }
  }

  removeTask(task: Task) {
    this.taskService.delete(task.key);
  }

  setTaskDone(task: Task) {
    this.taskService.setDone(task, true);
  }

  openTaskAdd() {
    this.openPage(HomePage.TASK_ADD_PAGE);
  }

  openTaskUpdate(task: Task) {
    this.openPage(HomePage.TASK_EDIT_PAGE, {task});
  }

  openPage(page: string, params: any = {}) {
    this.navCtrl.push(page, params);
  }

  closeMenu() {
    this.menu.close();
  }
}
