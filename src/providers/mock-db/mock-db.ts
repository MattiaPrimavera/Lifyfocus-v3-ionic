import { ReplaySubject } from 'rxjs';
import { MockProvider } from './../mock/mock';
import { Injectable } from '@angular/core';
import { Task } from '../../app/models/task';

/*
  Generated class for the MockDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MockDbProvider {
  tasks: Task[];
  tasks$: ReplaySubject<Task[]>;

  constructor(
    private mock: MockProvider
  ) {
    this.tasks = this.mock.getTasks();
    this.tasks$ = new ReplaySubject();
    this.tasks$.next(this.tasks);
  }

  getTasks() {
    return this.tasks$;
  }

  publish() {
    this.tasks$.next(this.tasks);
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.publish();
  }

  async editTask(task: Task) {
    for(let t of this.tasks) {
      if(t.key === task.key) {
        t = task;
        this.publish();
        return;
      }
    }
  }

  async removeTask(key: string) {
    this.tasks = this.tasks.filter(t => t.key !== key);
    this.publish();
    return;
  }
}
