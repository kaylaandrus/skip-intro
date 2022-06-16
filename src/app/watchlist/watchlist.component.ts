import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {
  tvShowTest = [
    'Game of Thrones',
    'Gilmore Girls',
    'The Boys',
    'Stranger Things',
  ];

  constructor() {}

  ngOnInit(): void {}
}
