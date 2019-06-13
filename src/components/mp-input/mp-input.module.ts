import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MpInputComponent } from './mp-input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MpInputComponent
  ],
  imports: [
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    MpInputComponent
  ]
})
export class MpInputModule {}
