import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BaseModelPageComponent } from './base-model-page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BaseModelPageComponent
  ],
  imports: [
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    BaseModelPageComponent
  ]
})
export class BaseModelPageModule {}
