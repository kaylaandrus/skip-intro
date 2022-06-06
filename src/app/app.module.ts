import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';
import { NetflixComponent } from './what-to-watch/netflix/netflix.component';
import { HuluComponent } from './what-to-watch/hulu/hulu.component';
import { HbomaxComponent } from './what-to-watch/hbomax/hbomax.component';
import { DisneyplusComponent } from './what-to-watch/disneyplus/disneyplus.component';
import { AmazonprimeComponent } from './what-to-watch/amazonprime/amazonprime.component';
import { ShowSearchComponent } from './show-search/show-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WatchlistComponent,
    WhatToWatchComponent,
    NetflixComponent,
    HuluComponent,
    HbomaxComponent,
    DisneyplusComponent,
    AmazonprimeComponent,
    ShowSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
