import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private user: firebase.User;
  private auth: firebase.auth.Auth;
  private profile: any;

	constructor(public firebaseAuth: AngularFireAuth) {
    this.auth = firebaseAuth.auth;
		this.authState.subscribe(user => {
			this.user = user;
		});
  }

  get authState(): Observable<firebase.User> {
    return this.firebaseAuth.authState;
  }

  get userProfile(): any {
    return this.profile;
  }

	async signInWithEmail(credentials: { email: any; password: any; }): Promise<any> {
		const profile = await this.auth.signInWithEmailAndPassword(credentials.email,
       credentials.password);

    this.storeProfile(profile);
    return profile;
  }

  storeProfile(profile: any) {
    this.profile = {
      email: profile.email,
      uid: profile.uid
    }
  }

	signUp(credentials: { email: any; password: any; }) {
    return this.auth.createUserWithEmailAndPassword(credentials.email,credentials.password)
      .then(profile => {

        return Promise.resolve(profile);
      })
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
