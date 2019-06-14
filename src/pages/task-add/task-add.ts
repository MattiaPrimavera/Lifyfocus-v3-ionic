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
  name: 'task-add'
})
@Component({
  selector: 'page-task-add',
  templateUrl: 'task-add.html',
  providers: [
    TaskService
  ]
})
export class TaskAddPage {
  priorityButtons = [
    {value: 0, label: 'low'},
    {value: 5, label: 'medium'},
    {value: 10, label: 'high'}
  ]

  form = this.formBuilder.group({
    title: '',
    description: '',
  });

  errors: string[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService,
    private toast: ToastService,
    private formBuilder: FormBuilder,
  ) {
  }

  addTask() {
    const task = {
      ...this.form.value,
      created: new Date().toISOString(),
      done: false,
      priority: 0,
    }
    this.taskService.add(task);
    this.toast.show(`${task.title}: saved!`)
    this.navCtrl.setRoot('home');
  }
}
