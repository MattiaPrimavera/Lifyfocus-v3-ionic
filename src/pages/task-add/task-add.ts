import { Task } from './../../app/models/task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskListService } from '../../providers/task-list-service/task-list-service';

/**
 * Generated class for the TaskAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'task-add',
  segment: 'task-add'
})
@Component({
  selector: 'page-task-add',
  templateUrl: 'task-add.html',
})
export class TaskAddPage {
  task: Task = {
    title: 'Shopping list - Today',
    description: 'Go to the supermarket'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskListService: TaskListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskAddPage');
  }

  addTask(task: Task) {
    this.taskListService.addTask(task).then(ref => {
      console.log(ref.key);
      this.navCtrl.setRoot('home');
    })
  }
}
