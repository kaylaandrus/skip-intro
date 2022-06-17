import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/show/show.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  myShows: Show[] = [
    new Show(
      'Stranger Things: Season 4',
      2022,
      'Sci-Fi',
      '100',
      'https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
