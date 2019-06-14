import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskEditPage } from './task-edit';
import { MpInputModule } from '../../components/mp-input/mp-input.module';
import { MpSegmentModule } from '../../components/mp-segment/mp-segment.module';

@NgModule({
  declarations: [
    TaskEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskEditPage),
    MpInputModule,
    MpSegmentModule
  ],
})
export class TaskEditPageModule {}
