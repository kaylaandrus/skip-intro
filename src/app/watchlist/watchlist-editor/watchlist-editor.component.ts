import { Show } from 'src/app/shared/show/show.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-watchlist-editor',
  templateUrl: './watchlist-editor.component.html',
  styleUrls: ['./watchlist-editor.component.css'],
})
export class WatchlistEditorComponent implements OnInit {
  idx: number;
  isEditMode = false;

  showDetails: Show = {
    title: 'Test',
    releaseDate: 1,
    genre: 'Test',
    library: 'Test',
    coverImg: 'TestImg',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private watchlistService: WatchlistService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;

      if (this.isEditMode == true) {
        this.showDetails = this.watchlistService.getWatchlistShow(this.idx);
      }
    });
  }

  onShowFormSubmit(formObj: NgForm) {
    // Destructure the show properties from the "formObj"
    const { title, releaseDate, genre, library, coverImg } = formObj.value;

    // Set the local "showDetails" object to the values from the "formObj"
    this.showDetails = new Show(title, releaseDate, genre, library, coverImg);

    // Conditionally call different methods depending on what "mode" we are in
    if (this.isEditMode == true) {
      // Edit existing show (using the showDetails)
      this.watchlistService.updateWatchlistShow(this.idx, this.showDetails);
    } else {
      // Save a new book (using the bookDetails)
      this.watchlistService.saveShowToWatchlist(this.showDetails);
    }

    // Reset the form
    this.onResetForm();
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
