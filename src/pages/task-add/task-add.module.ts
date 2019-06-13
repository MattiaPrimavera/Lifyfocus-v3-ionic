import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskAddPage } from './task-add';
import { MpInputModule } from '../../components/mp-input/mp-input.module';

@NgModule({
  declarations: [
    TaskAddPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskAddPage),
    MpInputModule,
  ],
})
export class TaskAddPageModule {}
