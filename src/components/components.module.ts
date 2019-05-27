import { NgModule } from '@angular/core';
import { MpSlidingItemComponent } from './mp-sliding-item/mp-sliding-item';
import { MpSlidingListComponent } from './mp-sliding-list/mp-sliding-list';
@NgModule({
	declarations: [MpSlidingItemComponent,
    MpSlidingListComponent],
	imports: [],
	exports: [MpSlidingItemComponent,
    MpSlidingListComponent]
})
export class ComponentsModule {}
