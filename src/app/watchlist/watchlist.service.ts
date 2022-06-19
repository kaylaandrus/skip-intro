import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Show } from '../shared/show/show.model';
@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  selectedWatchlistShow = new Subject<Show>();
  showsChanged = new Subject<Show[]>();

  private myShows: Show[] = [];

  saveShowToWatchlist(show: Show) {
    this.myShows.push(show);
    this.showsChanged.next(this.myShows.slice());
  }
  getWatchlistShows() {
    return this.myShows.slice();
  }
  getWatchlistShow(idx: number) {
    return this.myShows.slice()[idx]
  }
  updateWatchlistShow(index: number, updatedShowDetails: Show) {
    this.myShows[index] = updatedShowDetails;
    this.showsChanged.next(this.myShows.slice());
  }
  setWatchlistShows(shows: Show[] = []) {
    this.myShows = shows || [];
    this.showsChanged.next(this.myShows.slice());
  }
  removeWatchlistShow(idx: number) {
    if (idx >= this.myShows.length || idx <0) return;
    this.myShows.splice(idx, 1);
    this.showsChanged.next(this.myShows.slice());
  }
}
