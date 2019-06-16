import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskEditPage } from './task-edit';
import { MpInputModule } from '../../components/mp-input/mp-input.module';
import { MpSegmentModule } from '../../components/mp-segment/mp-segment.module';
import { BaseModelPageModule } from '../../components/base-model-page/base-model-page.module';

@NgModule({
  declarations: [
    TaskEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskEditPage),
    BaseModelPageModule,
    MpInputModule,
    MpSegmentModule,
  ],
})
export class TaskEditPageModule {}
