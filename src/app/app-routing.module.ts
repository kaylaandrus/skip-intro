import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { AuthComponent } from './shared/auth/auth.component';
import { AuthGuard } from './shared/auth/auth.guard';


import { AmazonprimeComponent } from './what-to-watch/streaming-services/amazonprime/amazonprime.component';
import { DisneyplusComponent } from './what-to-watch/streaming-services/disneyplus/disneyplus.component';
import { HbomaxComponent } from './what-to-watch/streaming-services/hbomax/hbomax.component';
import { HuluComponent } from './what-to-watch/streaming-services/hulu/hulu.component';
import { NetflixComponent } from './what-to-watch/streaming-services/netflix/netflix.component';
import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';


const routes: Routes = [

  { path: 'auth', loadChildren: () => import("./shared/auth/auth.module").then(m => m.AuthModule)},
  { path: 'my-watchlist', loadChildren: () => import("./watchlist/watchlist.module").then(m => m.WatchlistModule)},
  { path: 'what-to-watch', component: WhatToWatchComponent, canActivate: [AuthGuard] },
  { path: 'what-to-watch/streaming-services/netflix', component: NetflixComponent },
  { path: 'what-to-watch/streaming-services/hbomax', component: HbomaxComponent },
  { path: 'what-to-watch/streaming-services/hulu', component: HuluComponent },
  { path: 'what-to-watch/streaming-services/amazonprime', component: AmazonprimeComponent },
  { path: 'what-to-watch/streaming-services/disneyplus', component: DisneyplusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: "enabled"})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
