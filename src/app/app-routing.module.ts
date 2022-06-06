import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';

const routes: Routes = [
  { path: 'my-watchlist', component: WatchlistComponent },
  { path: 'what-to-watch', component: WhatToWatchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
