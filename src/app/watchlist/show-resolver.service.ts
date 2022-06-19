import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Show } from "../shared/show/show.model";
import { HTTPService } from "../shared/http/http.service";
import { WatchlistService } from "./watchlist.service";

@Injectable({
  providedIn: "root",
})
export class ShowResolverService implements Resolve<Show[]> {

  constructor(
    private watchlistService: WatchlistService,
    private httpService: HTTPService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const shows = this.watchlistService.getWatchlistShows();
// CODE BELOW SHOULD WORK ONCE FIXED ON HTTP SERVICE
    //if (shows.length === 0) {
      //return this.httpService.fetchShowsFromFirebase();
    //} else {
      //return shows;
    //}
  }
}
