import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/tvshow/tvshow.model';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  allShows: Show[] = [
    new Show(
      'Stranger Things: Season 4',
      2022,
      'Sci-fi',
      '100',
      'https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg'
    ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
