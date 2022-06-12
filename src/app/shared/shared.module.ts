import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";

import { TvshowComponent } from "./tvshow/tvshow.component";
import { AuthComponent } from './auth/auth.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [CommonModule, FormsModule]
})

export class SharedModule{}
