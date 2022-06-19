import { tap } from "rxjs";
import { Injectable, Pipe } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WatchlistService } from "src/app/watchlist/watchlist.service";
import { Show } from "../show/show.model";

const FIREBASE_DB_URL = "https://skip-intro-7b47f-default-rtdb.firebaseio.com/";

@Injectable({
  providedIn: "root",})

export class HTTPService {

  constructor(
    private http: HttpClient,
    private watchlistService: WatchlistService
    ) {}
    saveShowsToFirebase() {
      const saveShows = this.watchlistService.getWatchlistShows();

      this.http.put(FIREBASE_DB_URL, saveShows).subscribe((res) => {
        console.log("Firebase DB Response:", res);
      });
    }
    // FIGURE OUT WHY THIS DOESNT WORK
    // fetchShowsFromFirebase() {
      //return this.http.get(FIREBASE_DB_URL, {}).pipe(tap((show: Shows[]) => {
          //this.watchlistService.setWatchlistShows(shows);
        //})
    //);
  }
