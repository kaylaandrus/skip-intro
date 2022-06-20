import { Component, OnInit, OnDestroy } from '@angular/core';
import { HTTPService } from '../http/http.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  collapsed: boolean = true;
  show: boolean = false;

  isAuthenticated = false;

  constructor(
    private httpService: HTTPService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy() {
    this.authService.currentUser.unsubscribe();
  }
  onSaveData() {
    this.httpService.saveShowsToFirebase();
  }
  onFetchData() {
    this.httpService.fetchShowsFromFirebase().subscribe();
  }
  onSignOut() {
    this.authService.signOut();
  }
}
