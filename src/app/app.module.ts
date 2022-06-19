import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { AuthModule } from './shared/auth/auth.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WatchlistModule } from './watchlist/watchlist.module';



import { WhatToWatchComponent } from './what-to-watch/what-to-watch.component';
import { ShowResultsComponent } from './what-to-watch/show-results/show-results.component';
import { ShowSearchComponent } from './what-to-watch/show-search/show-search.component';
import { StreamingServicesComponent } from './what-to-watch/streaming-services/streaming-services.component';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ShowSearchComponent,
    ShowResultsComponent,
    WhatToWatchComponent,
    NavbarComponent,
    StreamingServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
