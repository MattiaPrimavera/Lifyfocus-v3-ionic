import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskEditPage } from './task-edit';
import { MpInputModule } from '../../components/mp-input/mp-input.module';

@NgModule({
  declarations: [
    TaskEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskEditPage),
    MpInputModule
  ],
})
export class TaskEditPageModule {}
