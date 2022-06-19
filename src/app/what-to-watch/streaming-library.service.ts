import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Show } from "../shared/show/show.model";

@Injectable({
  providedIn: "root",
})

export class StreamingLibraryService {
  showListChanged = new EventEmitter<Show[]>();

  private allShows: Show[] = [
    new Show(
      "Outlander Season 5",
          2020,
          "Drama",
          "https://static.wikia.nocookie.net/outlander/images/b/b9/S5-Key-Art.jpeg/revision/latest?cb=20200103151243",
          "Starz"
    ),
    new Show(
      "Ozark Season 4",
          2022,
          "Drama",
          "https://resizing.flixster.com/0CXOWExVOTxLqU9UNf8yUcRfZzk=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNjA1YzVmYjUtMmE3NC00NjM0LWI0M2QtMGM1YmViZmEwZDY2LmpwZw==",
          "Netflix"
    ),
    new Show(
      "Severance",
          2022,
          "Drama",
          "https://m.media-amazon.com/images/M/MV5BOThjMjc4NDUtNmIyOC00MzhmLWIxNjQtMDlkOTlmNzA0NDJlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
          "Apple TV+"
    ),
  ];
  getShows() {
    return this.allShows.slice();
  }
}
