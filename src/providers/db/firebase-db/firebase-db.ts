import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Task } from '../../../app/models/task';
import * as Environment from '../../../app/environment';
import { Observable } from 'rxjs';
import { IDatabase } from '../IDatabase';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider implements IDatabase {
  private uid = null;
  private taskListRef = Environment.NODE_ENV === 'test' ? null : this.db.list<Task>(`tasks/${this.uid}`);
  constructor(
    private db: AngularFireDatabase,
  ) {}

  setUid(uid: string) {
    this.uid = uid;
    this.taskListRef = Environment.NODE_ENV === 'test' ? null : this.db.list<Task>(`tasks/${this.uid}`);
  }

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

  editTask(task: Task): Promise<void> {
    return this.taskListRef.update(task.key, task);
  }

  setDone(task: Task): Promise<void> {
    task.done = true;
    return this.editTask(task);
  }

  removeTask(task: Task): Promise<void> {
    return this.taskListRef.remove(task.key);
  }
}
