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
    name: "",
    source_ids:"",
    types: "",
    image_url: "",
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
    const { name, source_ids, types, image_url } = formObj.value;

    this.showDetails = new Show(name, source_ids, types, image_url);

    if (this.isEditMode == true) {
      this.watchlistService.updateWatchlistShow(this.idx, this.showDetails);
    } else {
      this.watchlistService.saveShowToWatchlist(this.showDetails);
    }

    this.onResetForm();
  }

  onResetForm() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
