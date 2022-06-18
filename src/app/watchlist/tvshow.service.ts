import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Show } from '../shared/show/show.model';
@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  selectedTvshow = new Subject<Show>();
  tvshowsChanged = new Subject<Show[]>();
  private myTvshows: Show[] = [];

  constructor() {}
}
