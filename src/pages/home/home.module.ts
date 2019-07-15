import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MpSlidingItemModule } from '../../components/mp-sliding-item/mp-sliding-item.module';
import { MpLoaderModule } from '../../components/mp-loader/mp-loader.module';
import { MpCardModule } from '../../components/mp-card/mp-card.module';
import { TaskListModule } from '../../components/task-list/task-list.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MpSlidingItemModule,
    MpLoaderModule,
    MpCardModule,
    TaskListModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
