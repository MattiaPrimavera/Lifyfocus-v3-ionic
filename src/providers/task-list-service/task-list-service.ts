import { MockDbProvider } from './../mock-db/mock-db';
import { Task } from './../../app/models/task';
import { Injectable } from '@angular/core';
import * as Environment from '../../app/environment';
import { Observable } from 'rxjs';
import { FirebaseDbProvider } from '../firebase-db/firebase-db';

/*
  Generated class for the TaskListServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskListService {
  private db: FirebaseDbProvider | MockDbProvider;

  constructor(
    private firebaseDb: |FirebaseDbProvider,
    private mockDb: MockDbProvider,
  ) {
    this.db = Environment.NODE_ENV === 'test' ? this.mockDb : this.firebaseDb;
  }

  getTasks(): Observable<Task[]> {
    return this.db.getTasks();
  }

  addTask(task: Task) {
    return this.db.addTask(task);
  }

  editTask(task: Task): Promise<void> {
    return this.db.editTask(task);
  }

  removeTask(task: Task): Promise<void> {
    return this.db.removeTask(task);
  }

  setDone(task: Task): Promise<void> {
    task.done = true;
    return this.db.editTask(task);
  }
}
