import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TaskListComponent } from './task-list';
import { MpSlidingItemModule } from '../mp-sliding-item/mp-sliding-item.module';

@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    IonicModule,
    MpSlidingItemModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule {}
