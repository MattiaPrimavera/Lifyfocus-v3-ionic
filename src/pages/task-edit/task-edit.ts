import { TaskService } from '../../providers/task-service/task-service';
import { Task } from './../../app/models/task';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../providers/toast.service';
import { Environment } from '../../app/environment';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the TaskEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'task-edit',
})
@Component({
  selector: 'page-task-edit',
  templateUrl: 'task-edit.html',
  providers: [
    TaskService
  ]
})
export class TaskEditPage {
  task: Task;
  priorityButtons = [
    {value: 0, label: 'low'},
    {value: 5, label: 'medium'},
    {value: 10, label: 'high'}
  ];

  form = this.formBuilder.group({
    title: '',
    description: '',
  });
  errors: string[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService,
    private toast: ToastService,
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
  ) {}

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
  }

  ionViewDidLoad() {
    this.task = this.navParams.get('task');
    this.form.patchValue(this.task);
  }

  saveTask(task: Task) {
    task = {...task, ...this.form.value};
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
