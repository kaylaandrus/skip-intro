import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { ShowDetailsComponent } from './watchlist/show-details/show-details.component';
import { ShowResolverService } from './watchlist/show-resolver.service';
import { WatchlistEditorComponent } from './watchlist/watchlist-editor/watchlist-editor.component';
import { WatchlistHomeComponent } from './watchlist/watchlist-home/watchlist-home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { HomeComponent } from './home/home.component';

import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';
import { NetflixComponent } from './what-to-watch/streaming-services/netflix/netflix.component';
import { HuluComponent } from './what-to-watch/streaming-services/hulu/hulu.component';
import { HbomaxComponent } from './what-to-watch/streaming-services/hbomax/hbomax.component';
import { DisneyplusComponent } from './what-to-watch/streaming-services/disneyplus/disneyplus.component';
import { AmazonprimeComponent } from './what-to-watch/streaming-services/amazonprime/amazonprime.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'netflix', component: NetflixComponent },
  { path: 'hulu', component: HuluComponent },
  { path: 'hbomax', component: HbomaxComponent },
  { path: 'disneyplus', component: DisneyplusComponent },
  { path: 'amazonprime', component: AmazonprimeComponent },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'my-watchlist',
    loadChildren: () =>
      import('./watchlist/watchlist.module').then((m) => m.WatchlistModule),
  },
  //
  //{
  //path: "what-to-watch",
  //loadChildren: () =>
  //import("./what-to-watch/streaming-library.module).then(m => m.StreamingLibraryModule)
  //}
  {
    path: 'what-to-watch',
    component: WhatToWatchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: ShowDetailsComponent,
    resolve: [ShowResolverService],
  },
  {
    path: ':id/edit',
    component: WatchlistEditorComponent,
    resolve: [ShowResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
