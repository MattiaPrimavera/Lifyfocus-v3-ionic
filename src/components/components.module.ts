import { NgModule } from '@angular/core';
import { DynamicContentComponent } from './dynamic-content/dynamic-content';
import { DynamicTaskListComponent } from './dynamic-task-list/dynamic-task-list';
import { DynamicObjectiveListComponent } from './dynamic-objective-list/dynamic-objective-list';
import { DynamicUnknownComponent } from './dynamic-unknown/dynamic-unknown';
@NgModule({
	declarations: [DynamicContentComponent,
    DynamicTaskListComponent,
    DynamicObjectiveListComponent,
    DynamicUnknownComponent],
	imports: [],
	exports: [DynamicContentComponent,
    DynamicTaskListComponent,
    DynamicObjectiveListComponent,
    DynamicUnknownComponent]
})
export class ComponentsModule {}
