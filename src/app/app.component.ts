import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthService } from '../providers/auth-service/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage;

  constructor(platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      private auth: AuthService,
      private menu: MenuController
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.auth.firebaseAuth.authState
				.subscribe(
					user => {
						if (user) {
							this.rootPage = TabsPage;
						} else {
							this.rootPage = 'login';
						}
					},
					() => {
						this.rootPage = 'login';
					}
				);
  }

  login() {
    this.auth.signOut();
    this.menu.close();
		this.nav.setRoot(TabsPage);
	}

	logout() {
    this.auth.signOut();
    this.cleanupStorage();
    this.menu.close();
		this.nav.setRoot('login');
  }

  cleanupStorage() {
    localStorage.setItem('uid', '');
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
