import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pageDisplayed = "watchlist"

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.automaticSignIn();
  }
  onNavigatePage(page:string) {
    this.pageDisplayed = page;
  }
  title = 'skip-intro';
}
