import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { HTTPService } from '../http/http.service';

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
    private authService: AuthService,
    private httpService: HTTPService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }
  onSignOut() {
    this.authService.signOut();
  }
  onSaveData() {
    this.httpService.saveShowsToFirebase();
  }
  onFetchData() {
    this.httpService.fetchShowsFromFirebase().subscribe();
  }
}
