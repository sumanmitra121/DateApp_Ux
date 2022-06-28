import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { UtilityService } from 'src/utilyT/-utility.service';
import { userDtls } from 'src/Model/userDtls';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private utiLyT: UtilityService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   let currentuser : userDtls;
   this.utiLyT.currentUser$.pipe(take(1)).subscribe(res=> currentuser = res);
   if(currentuser){
     request = request.clone({
       setHeaders:{
         Authorization: `Bearer ${currentuser.token}`
       }
     })
     }
    return next.handle(request);
  }
}
