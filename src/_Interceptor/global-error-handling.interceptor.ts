import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GlobalErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private route: Router, private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modalStateError = [];
                for (const k in error.error.errors) {
                  if (error.error.errors[k]) {
                    modalStateError.push(error.error.errors);
                  }
                }
                throw modalStateError.flat();
              }
              else {
                this.toastr.error(error.statusText, error.status)
              }
              break;
            case 404: this.route.navigateByUrl('main/server-error'); break;
            case 401: this.toastr.error(error.error, error.status); break;
            case 500: const navigationExtras: NavigationExtras = { state: { error: error.error } };
              this.route.navigateByUrl('main/server-error', navigationExtras);
              break;
            default: this.toastr.error("Something went wrong!!");
              console.log(error);
              break;
          }
        }
        return throwError(error);
      })
    )
  }
}
