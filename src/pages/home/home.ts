import { Task } from './../../app/models/task';
import { TaskService } from '../../providers/task-service/task-service';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { Menu } from '../../app/models/menu-entry';

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
  public static TASK_EDIT_PAGE = 'task-edit';
  slidingItemMenu: Menu = this.menuService.getTaskMenu('Done');

  constructor(public navCtrl: NavController,
    private menuService: MenuProvider,
  ) {}
}
