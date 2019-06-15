import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MpSlidingListComponent } from './mp-sliding-list';
import { MpSlidingItemModule } from '../mp-sliding-item/mp-sliding-item.module';
import { MpLoaderModule } from '../mp-loader/mp-loader.module';

@NgModule({
  declarations: [
    MpSlidingListComponent
  ],
  imports: [
    IonicModule,
    MpSlidingItemModule,
    MpLoaderModule
  ],
  exports: [
    MpSlidingListComponent
  ]
})
export class MpSlidingListModule {}
