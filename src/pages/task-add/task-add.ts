import { Task } from './../../app/models/task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskService } from '../../providers/task-service/task-service';
import { ToastService } from '../../providers/toast.service';

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
    title: '',
    description: '',
    created: new Date(),
    done: false
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService,
    private toast: ToastService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskAddPage');
  }

  addTask(task: any) {
    this.taskService.addTask(task).then(ref => {
      if(ref)
        console.log(ref.key);
      this.toast.show(`${task.title}: saved!`)
      this.navCtrl.setRoot('home');
    })
  }
}
