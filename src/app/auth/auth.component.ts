import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObs: Observable<any>;
  signUpMode = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onAuthModeToggle() {
    this.signUpMode = !this.signUpMode;
  }

  authFormSubmit(formObj: NgForm) {
    const { email, password } = formObj.value;

    if (!email || !password) return;
    console.log(this.signUpMode);
    if (this.signUpMode == true) {
      this.authObs = this.authService.signUpToFirebase(email, password);
    } else {
      this.authObs = this.authService.signInToFirebase(email, password);
    }
    this.authObs.subscribe({
      next: (res) => {
        console.log('SUCCESS:', res);
        this.router.navigate(['watchlist']);
      },
      error: (err) => {
        console.log('ERROR:', err);
      },
    });
    formObj.reset();
  }
}
