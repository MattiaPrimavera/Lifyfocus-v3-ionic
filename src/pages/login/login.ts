import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { AuthService } from '../../providers/auth-service/auth-service';
import { SignupPage } from '../signup/signup';

@IonicPage({
  segment: 'login',
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
		private auth: AuthService,
		form: FormBuilder
	) {
		this.loginForm = form.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}

  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};

    this.auth.signInWithEmail(credentials)
			.then(() => this.navCtrl.setRoot(HomePage))
			.catch(error => this.loginError = error.message);
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle()
      .then(() => this.navCtrl.setRoot(HomePage))
      .catch(error => console.log(error.message));
  }
}
