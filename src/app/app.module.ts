import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WatchlistComponent } from './watchlist/watchlist.component';
import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';
import { NetflixComponent } from './what-to-watch/netflix/netflix.component';
import { HuluComponent } from './what-to-watch/hulu/hulu.component';
import { HbomaxComponent } from './what-to-watch/hbomax/hbomax.component';
import { DisneyplusComponent } from './what-to-watch/disneyplus/disneyplus.component';
import { AmazonprimeComponent } from './what-to-watch/amazonprime/amazonprime.component';
import { ShowSearchComponent } from './show-search/show-search.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedComponent } from './shared/shared.component';
import { TvshowComponent } from './shared/tvshow/tvshow.component';
import { DirectivesComponent } from './shared/directives/directives.component';
import { HttpComponent } from './shared/http/http.component';
import { HomeComponent } from './home/home.component';


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
    ShowSearchComponent,
    SharedComponent,
    TvshowComponent,
    DirectivesComponent,
    HttpComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
