import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";
import { Show } from "../show/show.model";

const FIREBASE_DB_URL = "https://skip-intro-7b47f-default-rtdb.firebaseio.com/";

@Injectable({
  providedIn: "root",})

export class HTTPService {
  constructor(private http: HttpClient) {}

  /*\ CODE APPLIED WHEN WATCHLIST SERVICE IS CREATED/*\
  //saveShowsToFirebase() {
   // const showsToSave = this.watchlistService.getWatchlistShows();

   // this.http.put(FIREBASE_DB_URL, showsToSave).subscribe(res => {
   // });
  }

  //fetchShowsFromFirebase() {
    //return this.http.get<Show[]>(this.firebaseRootURL, {}).pipe(
      //tap((shows) => {FIREBASE_DB_URL, showsToSave).subscribe(res => {
       // console.log("Firebase DB Res:", res);
      //});
      //}
    //);
*/}
