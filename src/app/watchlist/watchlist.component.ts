import { Component, OnInit } from '@angular/core';
import { Show } from '../shared/show/show.model';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
})
export class WatchlistComponent implements OnInit {

  selectedShow: Show;

  constructor() {}

  ngOnInit(): void {}
}
