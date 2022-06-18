import { Component, OnInit, OnDestroy } from '@angular/core';
import { Show } from 'src/app/shared/show/show.model';
import { WatchlistService } from '../watchlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit, OnDestroy {
  private showListSub: Subscription;
  myShows: Show[] = [
    new Show(
      'Stranger Things: Season 4',
      2022,
      'Sci-Fi',
      '100',
      'https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg')];
  sortField = "library";

  constructor(
    private watchlistService: WatchlistService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.myShows = this.watchlistService.getWatchlistShows();
    this.showListSub = this.watchlistService.showsChanged.subscribe(
      updatedShows => {
        console.log("updatedShows:", updatedShows);
        this.myShows = updatedShows;
      }
    );
  }
  ngOnDestroy() {
    this.showListSub.unsubscribe();
  }
  onRemoveShow(idx: number) {
    this.watchlistService.removeWatchlistShow(idx);
  }
  onAddNewShow() {
    this.router.navigate(["new"], {relativeTo: this.route });
  }
  onSortShows() {
    this.sortField = this.sortField == "library" ? "title" : "library";
  }
}
