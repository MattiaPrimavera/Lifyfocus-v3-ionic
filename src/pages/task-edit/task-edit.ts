import { TaskService } from '../../providers/task-service/task-service';
import { Task } from './../../app/models/task';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastService } from '../../providers/toast.service';
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
  showRemove: boolean = false;
  pageType: any = 'add';
  task: Task = null;
  title: string = 'Add';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private taskService: TaskService,
    private toast: ToastService,
    private changeDetector: ChangeDetectorRef,
    private formBuilder: FormBuilder,
  ) {
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
  }

  ionViewDidLoad() {
    this.task = this.navParams.get('task');
    this.pageType = this.navParams.get('pageType');
    this.setupPage(this.pageType);

    if(this.task)
      this.form.patchValue(this.task);
  }

  /**
   * Setup page according to its PageType (add / edit)
   * @param pageType page type received as NavParam
   */
  setupPage(pageType: string) {
    if(pageType === 'add') {
      this.title = 'Add';
      this.showRemove = false;
    } else {
      this.title = 'Edit';
      this.showRemove = true;
    }
  }

  editTask() {
    this.task = {...this.task, ...this.form.value};
    this.taskService.update(this.task).then(() => {
      this.toast.show(`${this.task.title}: saved!`)
      this.navCtrl.setRoot('tasks')
    })
  }

  addTask() {
    if(this.form.valid) {
      const task = {
        ...this.form.value,
        createdAt: new Date().toISOString(),
        isDone: false,
        priority: 0,
      }
      this.taskService.add(task);
      this.toast.show(`${task.title}: saved!`)
      this.navCtrl.setRoot('tasks');
    }
  }

  /**
   * Save the task (add / edit)
   */
  save() {
    if(this.pageType == 'add')
      this.addTask();
    else
      this.editTask();
  }

  remove() {
    console.log('Remove clicked')
    this.taskService.delete(this.task.key).then(() => {
      this.toast.show(`${this.task.title}: removed!`)
      this.navCtrl.setRoot('home')
    })
  }
}
