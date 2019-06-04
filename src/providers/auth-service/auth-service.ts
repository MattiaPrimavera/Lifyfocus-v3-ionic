import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private user: firebase.User;
  private auth: firebase.auth.Auth;

	constructor(public firebaseAuth: AngularFireAuth) {
    this.auth = firebaseAuth.auth;
		this.authState.subscribe(user => {
			this.user = user;
		});
  }

  get authState(): Observable<firebase.User> {
    return this.firebaseAuth.authState;
  }

	signInWithEmail(credentials: { email: any; password: any; }): Promise<any> {
		console.log('Sign in with email');
		return this.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials: { email: any; password: any; }) {
		return this.auth.createUserWithEmailAndPassword(credentials.email,credentials.password);
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail(): string {
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.auth.signOut();
	}

	signInWithGoogle(): Promise<any> {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}

	private async oauthSignIn(provider: AuthProvider) {
		if (!(<any>window).cordova) {
			return this.auth.signInWithPopup(provider);
		} else {
			await this.auth.signInWithRedirect(provider);
      try {
        const result = await this.auth.getRedirectResult();
        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        console.log(token, user);
      }
      catch (error) {
        // Handle Errors here.
        alert(error.message);
      }
		}
	}

}
