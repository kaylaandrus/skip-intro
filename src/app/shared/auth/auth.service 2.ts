<<<<<<< HEAD
import { HttpClient } from "@angular/common/http"
import { BehaviorSubject, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core"
import { User } from "./user.model";

const SIGN_UP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy1E_D6OgqJ-3c3mmP09rUm6GRxHlqZko";
const SIGN_IN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=IzaSyBy1E_D6OgqJ-3c3mmP09rUm6GRxHlqZko";

=======
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, exhaustMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { User } from './user.model';

const SIGN_UP_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy1E_D6OgqJ-3c3mmP09rUm6GRxHlqZko';
const SIGN_IN_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=IzaSyBy1E_D6OgqJ-3c3mmP09rUm6GRxHlqZko';
>>>>>>> master

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;
}
@Injectable({
  providedIn: "root",
})

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExpTimer: any;

  currentUser = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signUpToFirebase(email: string, password: string) {
    return this.http
<<<<<<< HEAD
    .post<any>(SIGN_UP_URL + environment.firebaseAPIKey, {
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
  signInToFirebase (email: string, password: string) {
    return this.http
    .post<any>(SIGN_IN_URL + environment.firebaseAPIKey,{
=======
      .post<any>(SIGN_UP_URL + environment.firebaseAPIKey, {
>>>>>>> master
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
  signIn(email: string, password: string) {
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
    this.router.navigate(['auth']);
  }
  automaticSignIn() {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

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
<<<<<<< HEAD
  automaticSignOut(expDuration) {
=======
  automaticSignOut(expDuration: number) {
    console.log('Expiration Duration:', expDuration);

>>>>>>> master
    this.tokenExpTimer = setTimeout(() => {
      this.signOut();
    }, expDuration);
  }
  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

<<<<<<< HEAD
  const newUser = new User(email, userId, token, expDate);

  this.currentUser.next(newUser);
=======
    const formUser = new User(email, userId, token, expDate);

    this.currentUser.next(formUser);
>>>>>>> master

    this.automaticSignOut(expiresIn * 1000);

<<<<<<< HEAD
  localStorage.setItem("userData", JSON.stringify(newUser));
=======
    localStorage.setItem('userData', JSON.stringify(formUser));
>>>>>>> master
  }
}
