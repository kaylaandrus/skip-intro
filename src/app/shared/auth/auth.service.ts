import { HttpClient, HttpParams } from "@angular/common/http"
import { BehaviorSubject, exhaustMap, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core"

import { User } from "./user.model";


const AUTH_API_KEY = "lb2NG4CiWnUIRQgEbzvcKDeXMyKXCNern1SH67eN";
const SIGN_UP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy1E_D6OgqJ-3c3mmP09rUm6GRxHlqZko";
const SIGN_IN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=IzaSyBy1E_D6OgqJ-3c3mmP09rUm6GRxHlqZko";

Injectable({
  providedIn: "root",
})
export class AuthService {

  currentUser = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http
    .post<any>(SIGN_UP_URL + AUTH_API_KEY, {
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
  signIn (email: string, password: string) {
    return this.http
    .post<any>(SIGN_IN_URL + AUTH_API_KEY,{
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
handleAuth(email: string, userId: string, token: string, expiresIn: number) {
  const expDate = new Date(new Date().getTime() + expiresIn * 1000);

  const formUser = new User(email, userId, token, expDate);

  this.currentUser.next(formUser);

  localStorage.setItem("userData", JSON.stringify(formUser));
  }
}
