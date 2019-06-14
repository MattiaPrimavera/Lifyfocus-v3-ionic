import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskAddPage } from './task-add';
import { MpInputModule } from '../../components/mp-input/mp-input.module';
import { MpSegmentModule } from '../../components/mp-segment/mp-segment.module';

@NgModule({
  declarations: [
    TaskAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskAddPage),
    MpInputModule,
    MpSegmentModule
  ],
})
export class TaskAddPageModule {}
