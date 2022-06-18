import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/show/show.model';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  allShows: Show[] = [
    new Show(
          "Outlander Season 5",
          2020,
          "Drama",
          "https://static.wikia.nocookie.net/outlander/images/b/b9/S5-Key-Art.jpeg/revision/latest?cb=20200103151243",
          "Starz"
        )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
