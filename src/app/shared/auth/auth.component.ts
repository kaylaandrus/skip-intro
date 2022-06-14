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
  isLoginMode = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  errMsg = null;

  authObsrv: Observable<any>;

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    if (!formObj.valid) return;

    const { email, password } = formObj.value

    if (this.isLoginMode) {
      this.authObsrv = this.authService.signIn(email, password);
    } else {
      this.authObsrv = this.authService.signUp(email, password);
    }
    this.authObsrv.subscribe(
      (res) => {
        console.log('Auth Res Success:', res);
        if (this.errMsg) this.errMsg = null;

        this.router.navigate(['watchlist']);
      },
      (err) => {
        console.error('Auth Res Error:', err);
        this.errMsg = err.message;
      }
    );
    formObj.reset();
  }
}
