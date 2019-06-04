import { ToastService } from './../providers/toast.service';
import { TaskService } from '../providers/task-service/task-service';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MockProvider } from '../providers/mock/mock';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MockDbProvider } from '../providers/mock-db/mock-db';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { AuthService } from '../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    LoginPageModule,
    SignupPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MockProvider,
    TaskService,
    ToastService,
    MockDbProvider,
    FirebaseDbProvider,
    AuthService,
    AngularFireAuth
  ],
})
export class AppModule {}
