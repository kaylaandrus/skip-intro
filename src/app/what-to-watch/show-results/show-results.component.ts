import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/show/show.model';
import { StreamingLibraryService } from '../streaming-library.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  allShows: Show[] = [];

  constructor(private streamingLibraryService: StreamingLibraryService) { }

  ngOnInit(): void {
    this.allShows = this.streamingLibraryService.getShows();
  }
}
