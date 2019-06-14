import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MpSegmentComponent } from './mp-segment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MpSegmentComponent
  ],
  imports: [
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    MpSegmentComponent
  ]
})
export class MpSegmentModule {}
