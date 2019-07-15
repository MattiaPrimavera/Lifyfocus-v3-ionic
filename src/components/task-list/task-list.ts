import { Component, Input } from '@angular/core';
import { TaskService } from '../../providers/task-service/task-service';
import { Observable } from 'rxjs';
import { Task } from '../../app/models/task';
import { HomePage } from '../../pages/home/home';
import { MenuController, NavController } from 'ionic-angular';
import { SlideActions } from '../../providers/menu/menu';
import { Menu } from '../../app/models/menu-entry';

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
  @Input('searchInput') searchInput;
  @Input('menu') slidingItemMenu: Menu = null;
  @Input() headerTitle: string = '';

  showDone: boolean = false;
  tasks$: Observable<Task[]>;

  constructor(
    private taskService: TaskService,
    public navCtrl: NavController,
    public menu: MenuController
  ) {
    console.log('Hello TaskListComponent Component');
  }

  ngOnInit() {
    this.tasks$ = this.getTasks();
  }

  getTasks(): Observable<Task[]> {
    return this.taskService.list()
      .switchMap((tasks: Task[]) => {
        console.log('Getting the tasks TaskListComponent');
        return Observable.of(this.filterTasks(tasks))
      });
  }

  /**
   * Filter tasks by search bar input match with titlee
   */
  filterTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => task.isDone === this.showDone && this.filterTitle(task));
  }

  /**
   * Check if the task is to show according to the search bar input matching its title
   * @param task Task to filter
   * @returns show the task or not
   */
  filterTitle(task: Task): boolean {
/*    if(!this.searchInput.length)
      return true;

    return task.title.indexOf(this.searchInput) >= 0 ? true : false;*/
    return true;
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
