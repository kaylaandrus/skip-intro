import { Component, OnInit, OnDestroy } from '@angular/core';
import { Show } from 'src/app/shared/show/show.model';
import { WatchlistService } from '../watchlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HTTPService } from 'src/app/shared/http/http.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit, OnDestroy {
  private showListSub: Subscription;
  myShows: Show[] = [];
  sortField = "source_ids";
  sortSwitcher = true;

  constructor(
    private watchlistService: WatchlistService,
    private router: Router,
    private httpService: HTTPService,
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
    this.sortSwitcher = !this.sortSwitcher;

    if (this.sortSwitcher) {
      this.sortField = 'source_ids';
    } else {
      this.sortField = 'name';
    }
  }
}
