import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { initializeApp } from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  firebaseConfig = {};
  app = initializeApp(this.firebaseConfig);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.automaticSignIn();
  }
}

