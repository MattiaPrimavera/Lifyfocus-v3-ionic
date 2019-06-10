import { Task } from '../../app/models/task'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from '../db/Database';

/*
  Generated class for the TaskService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskService {
  constructor(
    private db: DatabaseService
  ) {}

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
