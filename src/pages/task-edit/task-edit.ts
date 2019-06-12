import { MockProvider } from './../../providers/mock/mock';
import { TaskService } from '../../providers/task-service/task-service';
import { Task } from './../../app/models/task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../providers/toast.service';
import * as Environment from '../../app/environment';

/**
 * Generated class for the TaskEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'task-edit',
  segment: 'task-edit'
})
@Component({
  selector: 'page-task-edit',
  templateUrl: 'task-edit.html',
})
export class TaskEditPage {
  task: Task;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService,
    private toast: ToastService,
    private mock: MockProvider
  ) {}

  ionViewDidLoad() {
    this.task = this.navParams.get('task');
    if(!this.task && Environment.NODE_ENV === 'test') {
      this.task = this.mock.getTasks().pop();
    }
  }

  saveTask(task: Task) {
    this.taskService.update(task).then(() => {
      this.toast.show(`${task.title}: saved!`)
      this.navCtrl.setRoot('home')
    })
  }

  removeTask(task: Task) {
    this.taskService.delete(task.key).then(() => {
      this.toast.show(`${task.title}: removed!`)
      this.navCtrl.setRoot('home')
    })
  }
}
