import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Show } from 'src/app/shared/show/show.model';
import { WatchlistService } from '../watchlist.service';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  show: Show;
  idx: number;

  constructor(
    private router: ActivatedRoute,
    private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.show = this.watchlistService.getWatchlistShow(this.idx);
    });
  }
}
