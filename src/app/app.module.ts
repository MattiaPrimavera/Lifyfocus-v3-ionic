import { DynamicUnknownComponent } from './../components/dynamic-unknown/dynamic-unknown';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MockProvider } from '../providers/mock/mock';
import { DynamicTaskListComponent } from '../components/dynamic-task-list/dynamic-task-list';
import { DynamicObjectiveListComponent } from '../components/dynamic-objective-list/dynamic-objective-list';
import { DynamicContentComponent } from '../components/dynamic-content/dynamic-content';
import { ObjectivesPage } from '../pages/objectives/objectives';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DynamicTaskListComponent,
    DynamicObjectiveListComponent,
    DynamicContentComponent,
    DynamicUnknownComponent,
    ObjectivesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ObjectivesPage,
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
    MockProvider
  ]
})
export class AppModule {}
