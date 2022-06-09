import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { TvshowComponent } from "./tvshow/tvshow.component";
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [TvshowComponent, AuthComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [TvshowComponent, CommonModule, FormsModule]
})

export class SharedModule{}
