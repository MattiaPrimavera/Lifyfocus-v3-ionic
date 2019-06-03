import { MockDbProvider } from '../mock-db/mock-db'
import { Task } from '../../app/models/task'
import { Injectable } from '@angular/core';
import * as Environment from '../../app/environment';
import { Observable } from 'rxjs';
import { FirebaseDbProvider } from '../firebase-db/firebase-db';

/*
  Generated class for the TaskService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskService {
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

  addTask(task: Task): any {
    return this.db.addTask(task);
  }

  editTask(task: Task): Promise<void> {
    return this.db.editTask(task);
  }

  removeTask(task: Task): Promise<void> {
    return this.db.removeTask(task);
  }

  updateDoneStatus(task: Task): Promise<void> {
    task.done = !task.done;
    return this.db.editTask(task);
  }
}
