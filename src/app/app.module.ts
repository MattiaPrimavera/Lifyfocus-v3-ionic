import { ToastService } from './../providers/toast.service';
import { TaskListService } from './../providers/task-list-service/task-list-service';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { DynamicUnknownComponent } from './../components/dynamic-unknown/dynamic-unknown';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MockProvider } from '../providers/mock/mock';
import { DynamicTaskListComponent } from '../components/dynamic-task-list/dynamic-task-list';
import { DynamicObjectiveListComponent } from '../components/dynamic-objective-list/dynamic-objective-list';
import { DynamicContentComponent } from '../components/dynamic-content/dynamic-content';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DynamicTaskListComponent,
    DynamicObjectiveListComponent,
    DynamicContentComponent,
    DynamicUnknownComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DynamicTaskListComponent,
    DynamicObjectiveListComponent,
    DynamicContentComponent,
    DynamicUnknownComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MockProvider,
    TaskListService,
    ToastService
  ],
})
export class AppModule {}
