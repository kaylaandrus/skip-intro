import { Component, OnInit } from '@angular/core';
import { StreamingLibraryService } from '../streaming-library.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  constructor(private streamingLibraryService: StreamingLibraryService) {}

  ngOnInit(): void {}

}
