import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Show } from '../shared/tvshow/tvshow.model';
@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  selectedTvshow = new Subject<Show>();
  watchlistChanged = new Subject<Show[]>();
  private myTvshows: Show[] = [];

  saveShowToWatchlist(show: Show) {
    this.myTvshows.push(show);
    this.selectedTvshow.next(show);
    this.watchlistChanged.next(this.myTvshows.slice());
  }

  constructor() {}
}
