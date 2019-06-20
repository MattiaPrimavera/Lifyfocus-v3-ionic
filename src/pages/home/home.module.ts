import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MpSlidingItemModule } from '../../components/mp-sliding-item/mp-sliding-item.module';
import { MpLoaderModule } from '../../components/mp-loader/mp-loader.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MpSlidingItemModule,
    MpLoaderModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
