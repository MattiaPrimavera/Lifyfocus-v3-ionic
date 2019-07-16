import { Component, Input } from '@angular/core';
import { TaskService } from '../../providers/task-service/task-service';
import { Observable } from 'rxjs';
import { Task } from '../../app/models/task';
import { HomePage } from '../../pages/home/home';
import { MenuController, NavController } from 'ionic-angular';
import { SlideActions } from '../../providers/menu/menu';
import { Menu } from '../../app/models/menu-entry';
import { StoreProvider } from '../../providers/store/store';

/**
 * Generated class for the TaskListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-list',
  templateUrl: 'task-list.html',
  providers: [TaskService]
})
export class TaskListComponent {
  @Input('menu') slidingItemMenu: Menu = null;
  @Input() headerTitle: string = '';
  tasks$: Observable<Task[]>;

  constructor(
    private taskService: TaskService,
    public navCtrl: NavController,
    public menu: MenuController,
    public store: StoreProvider
  ) {
  }

  ngOnInit() {
    this.tasks$ = this.getTasks();
  }

  getTasks(): Observable<Task[]> {
    return Observable.combineLatest([this.taskService.list(), this.store.state$])
      .flatMap((result: any) => {
        const [tasks, state] = result;
        return Observable.of(this.filterTasks(tasks, {
          showCompleted: state.showCompleted,
          searchBarInput: state.searchBarInput
        }))
      });
  }

  /**
   * Filter tasks by search bar input match with titlee
   */
  filterTasks(tasks: Task[], filters: any): Task[] {
    return tasks.filter(task => task.isDone === filters.showCompleted && this.filterTitle(task, filters.searchBarInput));
  }

  /**
   * Check if the task is to show according to the search bar input matching its title
   * @param task Task to filter
   * @returns show the task or not
   */
  filterTitle(task: Task, title: string): boolean {
    if (!title || !title.length)
      return true;

    return task.title.indexOf(title) >= 0 ? true : false;
  }

  removeTask(task: Task) {
    this.taskService.delete(task.key);
  }

  setTaskDone(task: Task) {
    if(!task.isDone)
      task.isDone = true;
    else
      task.isDone = false;

    this.taskService.setDone(task, task.isDone);
  }

  openTaskUpdate(task: Task) {
    this.navCtrl.push(HomePage.TASK_EDIT_PAGE, {task, pageType: 'edit'});
  }

  closeMenu() {
    this.menu.close();
  }

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

}
