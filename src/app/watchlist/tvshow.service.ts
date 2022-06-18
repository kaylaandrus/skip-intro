import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Show } from '../shared/tvshow/tvshow.model';
@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  selectedTvshow = new Subject<Show>();
  tvshowsChanged = new Subject<Show[]>();
  private myTvshows: Show[] = [];

  // Save show to watchlist
  saveShowToWatchlist(show: Show) {
    this.myTvshows.push(show);
    this.selectedTvshow.next(show);
    this.tvshowsChanged.next(this.myTvshows.slice());
  }
  // Watch many
  getTvshows() {
    return this.myTvshows.slice();
  }
  // Watch one
  getTvshow(idx: number) {
    return this.myTvshows.slice()[idx];
  }

  // Delete show
  deleteShowFromMyTvshows(idx: number) {
    if (idx === -1) return;
    this.selectedTvshow.next(this.myTvshows[idx]);
    this.myTvshows.splice(idx, 1);
    this.tvshowsChanged.next(this.myTvshows.slice());
  }
  constructor() {}
}
