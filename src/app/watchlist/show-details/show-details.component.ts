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
    private route: ActivatedRoute,
    private router: Router,
    private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.show = this.watchlistService.getWatchlistShow(this.idx);
    });
  }
  onEditShow() {
    this.router.navigate(['../', this.idx, 'edit'], { relativeTo: this.route });
  }
  onRemoveShow() {
    this.watchlistService.removeWatchlistShow(this.idx);
    this.router.navigate(['watchlist']);
  }
}
