import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MenuProvider, SlideActions } from '../../providers/menu/menu';
import { TaskService } from '../../providers/task-service/task-service';
import { Observable } from 'rxjs';
import { Task } from '../../app/models/task';
import { Menu } from '../../app/models/menu-entry';
import { HomePage } from '../home/home';

/**
 * Generated class for the TasksDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'tasks-done',
  name: 'tasks-done'
})
@Component({
  selector: 'page-tasks-done',
  templateUrl: 'tasks-done.html',
  providers: [TaskService]
})
export class TasksDonePage {
  tasks$: Observable<Task[]> = this.taskService.list()
    .switchMap((tasks: Task[]) => {
      return Observable.of(tasks.filter(task => task.isDone === true));
    });

  slidingItemMenu: Menu = this.menuService.getTaskMenu('Undone');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuService: MenuProvider,
    private taskService: TaskService,
    private menu: MenuController
  ) {}


  onSlidingItemMenuClick($event) {
    const {optionId, item} = $event;
    const task = item;
    switch(optionId) {
      case SlideActions.Done:
        this.setTaskToDo(task);
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

  setTaskToDo(task: Task) {
    this.taskService.setDone(task, false);
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
