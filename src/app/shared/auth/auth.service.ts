import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

const AUTH_API_KEY = "lb2NG4CiWnUIRQgEbzvcKDeXMyKXCNern1SH67eN";
const SIGN_UP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBy1E_D6OgqJ-3c3mmP09rUm6GRxHlqZko";
const SIGN_IN_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=IzaSyBy1E_D6OgqJ-3c3mmP09rUm6GRxHlqZko";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post(SIGN_UP_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
