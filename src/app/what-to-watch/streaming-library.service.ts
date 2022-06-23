import { Injectable, EventEmitter } from '@angular/core';
import { Show } from '../shared/show/show.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StreamingLibraryService {
  showListChanged = new Subject<Show[]>();

  private allShows: Show[] = [];
  constructor(private http: HttpClient) {}

  fetchShows() {
    return this.allShows.slice();
  }
  fetchShowsFromAPI(query: string) {
    const formattedQuery = query.split('').join('%20').toLowerCase();


/// This link is throwing an HTTP 401 error with Api service (wrong API key)
/// figure out how this link is supposed to be formatted with the API Key: lb2NG4CiWnUIRQgEbzvcKDeXMyKXCNern1SH67eN
    this.http
      .get(
        `https://api.watchmode.com/v1/search/?apiKey=lb2NG4CiWnUIRQgEbzvcKDeXMyKXCNern1SH67eN&search_field=name&search_value=${query}`
      )
      .subscribe((searchResults: any) => {
        console.log(searchResults);
        this.saveShowsToGlobalArray(searchResults.title_results);
      });
  }
  saveShowsToGlobalArray(shows) {
    shows.forEach((show) => {
      console.log(show);

      const simpleShow = new Show(
        show.name,
        show.source_ids ? show.source_ids[0] : 'unknown',
        'unknown',
        'https://i.ibb.co/NFrzxpW/91168225-5507-4380-B65-D-C52-E86472299.png'
      );
      this.allShows.push(simpleShow);
    });
    this.showListChanged.next(this.allShows.slice());
  }
}
