import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WatchlistComponent } from './watchlist/watchlist.component';
import { ShowListComponent } from './watchlist/show-list/show-list.component';
import { ShowDetailsComponent } from './watchlist/show-details/show-details.component';

import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';
import { ShowResultsComponent } from './what-to-watch/show-results/show-results.component';
import { ShowSearchComponent } from './what-to-watch/show-search/show-search.component';
import { NetflixComponent } from './what-to-watch/netflix/netflix.component';
import { HuluComponent } from './what-to-watch/hulu/hulu.component';
import { HbomaxComponent } from './what-to-watch/hbomax/hbomax.component';
import { DisneyplusComponent } from './what-to-watch/disneyplus/disneyplus.component';
import { AmazonprimeComponent } from './what-to-watch/amazonprime/amazonprime.component';

import { SharedModule } from './shared/shared.module';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';


import { FooterComponent } from './footer/footer.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './shared/auth/auth.module';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { TvshowComponent } from './shared/tvshow/tvshow.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShowListComponent,
    TvshowComponent,
    ShowSearchComponent,
    ShowResultsComponent,
    WhatToWatchComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
