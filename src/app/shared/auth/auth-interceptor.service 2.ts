import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { exhaustMap, take } from "rxjs";

@Injectable({providedIn: "root"})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.currentUser.pipe(
      take (1),
      exhaustMap((User) => {
        if (!User) return next.handle(req);

        const modifiedReq = req.clone({
          params: new HttpParams().set("auth", User.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
