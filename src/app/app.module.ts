import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WatchlistComponent } from './watchlist/watchlist.component';
import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';
import { NetflixComponent } from './what-to-watch/netflix/netflix.component';
import { HuluComponent } from './what-to-watch/hulu/hulu.component';
import { HbomaxComponent } from './what-to-watch/hbomax/hbomax.component';
import { DisneyplusComponent } from './what-to-watch/disneyplus/disneyplus.component';
import { AmazonprimeComponent } from './what-to-watch/amazonprime/amazonprime.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedComponent } from './shared/shared.component';
import { TvshowComponent } from './shared/tvshow/tvshow.component';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './shared/directives/directives.component';

import { HttpComponent } from './shared/http/http.component';
import { AuthComponent } from './shared/auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { ShowListComponent } from './watchlist/show-list/show-list.component';
import { ShowDetailsComponent } from './watchlist/show-details/show-details.component';
import { ShowResultsComponent } from './what-to-watch/show-results/show-results.component';
import { ShowSearchComponent } from './what-to-watch/show-search/show-search.component';


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
    SharedComponent,
    TvshowComponent,
    DirectivesComponent,
    HttpComponent,
    HomeComponent,
    AuthComponent,
    ShowListComponent,
    ShowDetailsComponent,
    ShowResultsComponent,
    ShowSearchComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
