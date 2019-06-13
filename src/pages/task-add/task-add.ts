import { Task } from './../../app/models/task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskService } from '../../providers/task-service/task-service';
import { ToastService } from '../../providers/toast.service';
import { FormBuilder } from '@angular/forms';

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
  providers: [
    TaskService
  ]
})
export class TaskAddPage {
  form = this.formBuilder.group({
    title: '',
    description: '',
    created: new Date(),
    done: false
  });

  errors: string[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService,
    private toast: ToastService,
    private formBuilder: FormBuilder,
  ) {}

  addTask() {
    const task = this.form.value;
    this.taskService.add(task);
    this.toast.show(`${task.title}: saved!`)
    this.navCtrl.setRoot('home');
  }
}
