import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MpLoaderComponent } from './mp-loader';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MpLoaderComponent
  ],
  imports: [
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    MpLoaderComponent
  ]
})
export class MpLoaderModule {}
