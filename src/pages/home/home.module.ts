import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MpSlidingItemModule } from '../../components/mp-sliding-item/mp-sliding-item.module';
import { MpLoaderModule } from '../../components/mp-loader/mp-loader.module';
import { MpCardModule } from '../../components/mp-card/mp-card.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MpSlidingItemModule,
    MpLoaderModule,
    MpCardModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
