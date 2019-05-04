import { FirebaseDbProvider } from './../firebase-db/firebase-db';
import { MockDbProvider } from './../mock-db/mock-db';
import { Observable } from 'rxjs';
import { Task } from './../../app/models/task';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as Constants from '../../app/constants';

/*
  Generated class for the TaskListServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskListService {
  private db: any;

  constructor(
    private firebaseDb: FirebaseDbProvider,
    private mockDb: MockDbProvider,
  ) {
    this.db = Constants.NODE_ENV === 'test' ? this.mockDb : this.firebaseDb;
  }

  getTasks() {
    return this.db.getTasks();
  }

  addTask(task: Task) {
    return this.db.addTask(task);
  }

  editTask(task: Task) {
    return this.db.editTask(task.key, task);
  }

  removeTask(task: Task) {
    return this.db.removeTask(task.key);
  }
}
