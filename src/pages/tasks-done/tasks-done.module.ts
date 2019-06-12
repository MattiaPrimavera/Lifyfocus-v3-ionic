import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksDonePage } from './tasks-done';
import { MpSlidingListModule } from '../../components/mp-sliding-list/mp-sliding-list.module';
import { MpSlidingItemModule } from '../../components/mp-sliding-item/mp-sliding-item.module';

@NgModule({
  declarations: [
    TasksDonePage,
  ],
  imports: [
    IonicPageModule.forChild(TasksDonePage),
    MpSlidingItemModule,
    MpSlidingListModule
  ],
})
export class TasksDonePageModule {}
