import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authObs: Observable<any>;
  isSignUpMode = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onAuthModeToggle() {
    this.isSignUpMode = !this.isSignUpMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    const { email, password } = formObj.value;

    if (!email || !password) return;

    if (this.isSignUpMode == true) {
      this.authObs = this.authService.signInToFirebase(email, password);
    } else {
      this.authObs = this.authService.signUpToFirebase(email, password);
    }
    this.authObs.subscribe(
      (res: any) => {
        console.log("SUCCESS:", res);
        this.router.navigate(["watchlist"]);
      },
      (err: any) => {
        console.log("ERROR:", err);
      }
    );
    formObj.reset();
  }
}
