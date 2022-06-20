import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { WatchlistModule } from './watchlist/watchlist.module';
import { StreamingLibraryModule } from './what-to-watch/streaming-library.module';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WatchlistComponent } from './watchlist/watchlist.component';


//import { ServiceWorkerModule } from '@angular/service-worker';
//import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    WatchlistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule
   //ServiceWorkerModule.register('ngsw-worker.js', {
    //enabled: environment.production,
    //registrationStrategy: 'registerWhenStable30000'
    //})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
