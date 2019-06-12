import { ReplaySubject, Observable } from 'rxjs';
import { MockProvider } from '../../mock/mock';
import { Injectable } from '@angular/core';
import { Task } from '../../../app/models/task';

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
    this.tasks$ = new ReplaySubject<Task[]>();
    this.tasks$.next(this.tasks);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  publish() {
    this.tasks$.next(this.tasks);
  }

  async addTask(task: Task): Promise<void> {
    if(!task.key)
      task.key = this.generateTaskKey(task);
    this.tasks.push(task);
    this.publish();
    return;
  }

  generateTaskKey(task: Task): string {
    return task.description + Date.now();
  }

  async setDone(task: Task) {
    task.done = true;
    return this.editTask(task);
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

  async removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.key !== task.key);
    this.publish();
    return;
  }
}