import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { User } from './user.model';

const SIGN_UP_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const SIGN_IN_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExpTimer: any;

  userToken: string = null;
  currentUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signUpToFirebase(email: string, password: string) {
    console.log(email, password);
    const headerDict = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http
      .post<any>(
        SIGN_UP_URL + environment.firebaseAPIKey,
        {
          email,
          password,
          returnSecureToken: true,
        },
        requestOptions
      )
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;

          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
  }
  signInToFirebase(email: string, password: string) {
    return this.http
      .post<any>(SIGN_IN_URL + environment.firebaseAPIKey, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
  }
  signOut() {
    this.currentUser.next(null);
    localStorage.removeItem('userData');
    if (this.tokenExpTimer) clearTimeout(this.tokenExpTimer);
  }
  automaticSignIn() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) return;
    const { email, id, _token, _tokenExpirationDate } = userData;

    const loadedUser = new User(
      email,
      id,
      _token,
      new Date(_tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.currentUser.next(loadedUser);

      const expDuration =
        new Date(_tokenExpirationDate).getTime() - new Date().getTime();
      this.automaticSignOut(expDuration);
    }
  }

  automaticSignOut(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.signOut();
    }, expDuration);
  }
  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

    const newUser = new User(email, userId, token, expDate);

    this.currentUser.next(newUser);

    this.automaticSignOut(expiresIn * 1000);

    localStorage.setItem('show_user_data', JSON.stringify(newUser));
  }
}
