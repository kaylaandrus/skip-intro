import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/show/show.model';
import { StreamingLibraryService } from '../streaming-library.service';
import { WatchlistService } from 'src/app/watchlist/watchlist.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  allShows: Show[] = [];

  constructor(
    private streamingLibraryService: StreamingLibraryService,
    private watchlistService: WatchlistService
    ) { }

  ngOnInit(): void {
    this.allShows = this.streamingLibraryService.getShows();
  }
  onSaveShow(show: Show) {
    return this.watchlistService.saveShowToWatchlist(show);
  }
}
