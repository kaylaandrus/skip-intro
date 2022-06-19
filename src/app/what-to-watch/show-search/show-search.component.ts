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
    .get
  }

  onShowSearch(searchInput: string) {
    this.streamingLibraryService.fetchShowsFromAPI(searchInput);
  }
}
