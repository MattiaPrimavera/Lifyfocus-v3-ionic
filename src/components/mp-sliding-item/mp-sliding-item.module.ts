import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MpSlidingItemComponent } from './mp-sliding-item';
import { MpDatePipe } from '../../pipes/mp-date/mp-date';

@NgModule({
  declarations: [
    MpSlidingItemComponent,
    MpDatePipe
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    MpSlidingItemComponent
  ]
})
export class MpSlidingItemModule {}
