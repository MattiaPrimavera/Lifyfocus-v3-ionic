import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Task } from '../../app/models/task';
import * as Environment from '../../app/environment';
import { Observable } from 'rxjs';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {
  private taskListRef = Environment.NODE_ENV === 'test' ? null : this.db.list<Task>('tasks');
  constructor(
    private db: AngularFireDatabase
  ) {}

  getTasks(): Observable<Task[]> {
    return this.taskListRef
      .snapshotChanges() // Key and value
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }))
      });
  }

  addTask(task: Task) {
    return this.taskListRef.push(task);
  }

  editTask(task: Task) {
    return this.taskListRef.update(task.key, task);
  }

  removeTask(task: Task) {
    return this.taskListRef.remove(task.key);
  }
}
