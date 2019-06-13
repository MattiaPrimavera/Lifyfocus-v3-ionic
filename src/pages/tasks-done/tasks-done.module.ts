import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksDonePage } from './tasks-done';
import { MpSlidingItemModule } from '../../components/mp-sliding-item/mp-sliding-item.module';
import { MpSlidingListModule } from '../../components/mp-sliding-list/mp-sliding-list.module';

@NgModule({
  declarations: [
    TasksDonePage,
  ],
  imports: [
    IonicPageModule.forChild(TasksDonePage),
    MpSlidingListModule,
    MpSlidingItemModule
  ],
})
export class TasksDonePageModule {}
