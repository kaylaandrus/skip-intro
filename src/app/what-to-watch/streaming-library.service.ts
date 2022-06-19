import { Injectable } from "@angular/core";
import { Show } from "../shared/show/show.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class StreamingLibraryService {
  showListChanged = new Subject<Show[]>();

  private allShows: Show[] = [];
  getShows() {
    return this.allShows.slice();
  }
}
