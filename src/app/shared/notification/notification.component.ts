import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WatchlistService } from 'src/app/watchlist/watchlist.service';
import { Show } from '../show/show.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  addShowSub: Subscription;

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
    this.addShowSub = this.watchlistService.selectedWatchlistShow.subscribe(
      (showDetails: Show) => {
        alert(
          'Successfully added: ${showDetails.title} by ${showDetails.library}!'
        );
      }
    );
  }
  ngOnDestroy(): void {
      this.addShowSub.unsubscribe();
  }
}
