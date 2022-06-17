import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Show } from '../shared/show/show.model';
@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  selectedShow = new Subject<Show>();
  watchlistChanged = new Subject<Show[]>();
  private myShows: Show[] = [];

  saveShowToWatchlist(show: Show) {
    this.myShows.push(show);
    this.selectedShow.next(show);
    this.watchlistChanged.next(this.myShows.slice());
  }

  constructor() {}
}
