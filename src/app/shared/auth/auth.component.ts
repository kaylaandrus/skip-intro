import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObs: Observable<AuthResData>;
  signInMode = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onAuthModeToggle() {
    this.signInMode = !this.signInMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    const { email, password } = formObj.value;

    if (!email || !password) return;

    if (this.signInMode == true) {
      this.authObs = this.authService.signInToFirebase(email, password);
    } else {
      this.authObs = this.authService.signUpToFirebase(email, password);
    }
    this.authObs.subscribe(
      (res) => {
        console.log('SUCCESS:', res);
        this.router.navigate(['watchlist']);
      },
      (err) => {
        console.log('ERROR:', err);
      }
    );
    formObj.reset();
  }
}
