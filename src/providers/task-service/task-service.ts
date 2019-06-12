import { Task } from '../../app/models/task'
import { Injectable } from '@angular/core';
import { BaseService } from '../db/base-service';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the TaskService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskService extends BaseService<Task> {
  constructor(firebaseDb: AngularFireDatabase) {
      const path = 'tasks';
      super(path, firebaseDb);
  }

  // @TODO
  updateDoneStatus(task) {
    this.setDone(task);
  }

  setDone(task: Task): Promise<void> {
    task.done = true;
    return this.update(task);
  }
}