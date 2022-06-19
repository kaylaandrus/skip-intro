import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { WatchlistService } from 'src/app/watchlist/watchlist.service';
import { Show } from './show.model';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  @Input() show: Show;
  @Input() showIndex: number;

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit(): void {
  }
  onShowSelected() {
    this.watchlistService.selectedWatchlistShow.next(this.show);
  }
}
