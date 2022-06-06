import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedComponent } from './shared/shared.component';
import { TvshowComponent } from './shared/tvshow/tvshow.component';
import { DirectivesComponent } from './shared/directives/directives.component';
import { HttpComponent } from './shared/http/http.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SharedComponent,
    TvshowComponent,
    DirectivesComponent,
    HttpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
