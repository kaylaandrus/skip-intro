import { Component, OnInit } from '@angular/core';
import { StreamingLibraryService } from '../streaming-library.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  constructor(
    private streamingLibraryService: StreamingLibraryService,
    private http: HttpClient) {}

  ngOnInit(): void {}

  onFetchShows() {
    this.http
    .get('https://api.watchmode.com/v1/search/?apiKey=lb2NG4CiWnUIRQgEbzvcKDeXMyKXCNern1SH67eN&search_field=name&search_value=Ed%20Wood')
    .subscribe((searchResponse) => {
      console.log('searchResponse', searchResponse);
    });
  }

  onShowSearch(searchInput: string) {
    this.streamingLibraryService.fetchShowsFromAPI(searchInput);
  }
}
