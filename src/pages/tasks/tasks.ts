import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { Menu } from '../../app/models/menu-entry';
import { HomePage } from '../home/home';
import { StoreProvider } from '../../providers/store/store';

/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'tasks',
  segment: 'tasks'
})
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  headerTitle = 'Tasks';
  slidingItemMenu: Menu = this.menuService.getTaskMenu('Done');
  showCompleted: boolean = false;
  searchInput: string = ''; // ngModel for the search bar

  constructor(
    private menuService: MenuProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: StoreProvider
  ) {}

  onSearchInput() {
    this.store.setSearchBarInput(this.searchInput);
  }

  switchTaskStateDoneOrToDo() {
    this.showCompleted = !this.showCompleted;
    this.slidingItemMenu = this.menuService.getTaskMenu(!this.showCompleted ? 'Done' : 'To do');
    this.showCompleted ? this.store.showCompleted() : this.store.showToDo();
  }

  openTaskAdd() {
    this.navCtrl.push(HomePage.TASK_EDIT_PAGE, {pageType: 'add'});
  }
}
