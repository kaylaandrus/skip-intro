import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WatchlistService } from 'src/app/watchlist/watchlist.service';
import { Show } from '../show/show.model';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  FIREBASE_DB_URL = 'https://skip-intro-7b47f-default-rtdb.firebaseio.com';

  constructor(
    private http: HttpClient,
    private watchlistService: WatchlistService
  ) {}

  saveShowsToFirebase() {
    const shows = this.watchlistService.getWatchlistShows();

    this.http.put(this.FIREBASE_DB_URL, shows).subscribe((res) => {
      console.log('Firebase DB Res:', res);
    });
  }
  fetchShowsFromFirebase() {
    return this.http.get(this.FIREBASE_DB_URL, {}).pipe(
      tap((shows: Show[]) => {
        this.watchlistService.setWatchlistShows(shows);
      })
    );
  }
}
