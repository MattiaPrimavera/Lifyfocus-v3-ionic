import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MpSlidingItemModule } from '../../components/mp-sliding-item/mp-sliding-item.module';
import { MpSlidingListModule } from '../../components/mp-sliding-list/mp-sliding-list.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MpSlidingListModule,
    MpSlidingItemModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
