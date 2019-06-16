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
  showDone: boolean = false;
  searchInput: string = ''; // ngModel for the search bar

  tasks$: Observable<Task[]> = this.getTasks();
  filteredTasks$: Observable<Task[]> = this.getFilteredTasks(this.tasks$);
  slidingItemMenu: Menu = this.menuService.getTaskMenu('Done');

  constructor(
    private menuService: MenuProvider,
    public navCtrl: NavController,
    private taskService: TaskService,
    private menu: MenuController) {}

  getTasks(): Observable<Task[]> {
    return this.taskService.list()
      .switchMap((tasks: Task[]) => Observable.of(this.filterTasks(tasks)));
  }

  getFilteredTasks(tasks$: Observable<Task[]>): Observable<Task[]> {
    return tasks$
      .switchMap((tasks: Task[]) => Observable.of(this.filterTasks(tasks)));
  }

  /**
   * Filter tasks by search bar input match with titlee
   */
  filterTasks(tasks: Task[]): Task[] {
    return tasks.filter(task => task.done === this.showDone && this.filterTitle(task));
  }

  /**
   * Check if the task is to show according to the search bar input matching its title
   * @param task Task to filter
   * @returns show the task or not
   */
  filterTitle(task: Task): boolean {
    if(!this.searchInput.length)
      return true;

    return task.title.indexOf(this.searchInput) >= 0 ? true : false;
  }

  /**
   * Search bar event handlers
   */
  onSearchInput() {
    this.filteredTasks$ = this.getFilteredTasks(this.tasks$);
  }

  /**
   * Shows either 'Done' or 'To do' tasks
   */
  switchTasks() {
    this.showDone = !this.showDone;
    this.filteredTasks$ = this.getFilteredTasks(this.tasks$);
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

  removeTask(task: Task) {
    this.taskService.delete(task.key);
  }

  setTaskDone(task: Task) {
    if(!task.done)
      task.done = true;
    else
      task.done = false;

    this.taskService.setDone(task, task.done);
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
