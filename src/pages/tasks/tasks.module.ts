import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';
import { TaskListModule } from '../../components/task-list/task-list.module';
import { TaskService } from '../../providers/task-service/task-service';

@NgModule({
  declarations: [
    TasksPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksPage),
    TaskListModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksPageModule {}
