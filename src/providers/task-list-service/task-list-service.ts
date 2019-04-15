import { Task } from './../../app/models/task';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the TaskListServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskListService {
  private taskListRef = this.db.list<Task>('tasks')

  constructor(private db: AngularFireDatabase) {
    console.log('Hello TaskListServiceProvider Provider');
  }

  getTasks() {
    return this.taskListRef;
  }

  addTask(task: Task) {
    return this.taskListRef.push(task);
  }

  editTask(task: Task) {
    return this.taskListRef.update(task.key, task);
  }
}
