import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { TvshowComponent } from "./tvshow/tvshow.component";

@NgModule({
  declarations: [TvshowComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [TvshowComponent, CommonModule, FormsModule]
})

export class SharedModule{}
