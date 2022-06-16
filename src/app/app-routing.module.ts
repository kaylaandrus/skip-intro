import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AuthComponent } from './shared/auth/auth.component';
import { AuthGuard } from './shared/auth/auth.guard';

import { WatchlistComponent } from './watchlist/watchlist.component';
import { AmazonprimeComponent } from './what-to-watch/amazonprime/amazonprime.component';
import { DisneyplusComponent } from './what-to-watch/disneyplus/disneyplus.component';
import { HbomaxComponent } from './what-to-watch/hbomax/hbomax.component';
import { HuluComponent } from './what-to-watch/hulu/hulu.component';
import { NetflixComponent } from './what-to-watch/netflix/netflix.component';
import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';


const routes: Routes = [
  { path: '', redirectTo: "./home", pathMatch: "full"},
  { path: 'auth', loadChildren: () => import("./shared/auth/auth.module").then(m => m.AuthModule)},
  { path: 'my-watchlist', component: WatchlistComponent, canActivate: [AuthGuard] },
  { path: 'what-to-watch', component: WhatToWatchComponent, canActivate: [AuthGuard] },
  { path: 'what-to-watch/netflix', component: NetflixComponent },
  { path: 'what-to-watch/hbomax', component: HbomaxComponent },
  { path: 'what-to-watch/hulu', component: HuluComponent },
  { path: 'what-to-watch/amazonprime', component: AmazonprimeComponent },
  { path: 'what-to-watch/disneyplus', component: DisneyplusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: "enabled"})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
