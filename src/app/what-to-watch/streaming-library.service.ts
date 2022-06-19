import { Injectable } from "@angular/core";
import { Show } from "../shared/show/show.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class StreamingLibraryService {
  showListChanged = new Subject<Show[]>();

  private allShows: Show[] = [];

  fetchShows() {
    return this.allShows.slice();
  }
  fetchShowsFromAPI(query: string) {
    const formattedQuery = query
    .split("")
    .join ("+")
    .toLowerCase();
  }
}
