import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Show } from '../shared/show/show.model';
@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  selectedShow = new Subject<Show>();
  watchlistChanged = new Subject<Show[]>();

  private myShows: Show[] = [
      new Show(
        'Stranger Things: Season 4',
        2022,
        'Sci-Fi',
        'Netflix',
        'https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg'
      ),
      new Show(
        'Outlander Season 5',
        2020,
        'Drama',
        'Starz',
        'https://static.wikia.nocookie.net/outlander/images/b/b9/S5-Key-Art.jpeg/revision/latest?cb=20200103151243'
      ),
      new Show(
        'Greys Anatomy Season 18',
        2021,
        'Drama',
        'Hulu',
        'https://upload.wikimedia.org/wikipedia/en/6/6c/Greys_Anatomy_season_18_poster.jpg'
      )
    ];

  saveShowToWatchlist(show: Show) {
    this.myShows.push(show);
    this.selectedShow.next(show);
    this.watchlistChanged.next(this.myShows.slice());
  }
  getShows() {
    return this.myShows.slice();
  }
}
