import { Task } from './../../app/models/task';
import { TaskListService } from './../../providers/task-list-service/task-list-service';
import { MockProvider } from './../../providers/mock/mock';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//  context = this.mock.getTasks();
  tasks$: Observable<Task[]>;

  constructor(public navCtrl: NavController, private mock: MockProvider, private taskListService: TaskListService) {
    this.tasks$ = this.taskListService
      .getTasks() // Db list
      .snapshotChanges() // Key and value
      .map(changes => {
        console.log('Changes: ', changes);
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }))
      })
  }

  openTaskAddPage() {
    this.navCtrl.push('task-add')
  }
}
