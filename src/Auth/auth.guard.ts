import { Injectable } from '@angular/core';
import {CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilityService } from 'src/utilyT/-utility.service';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private utilyT: UtilityService) {

  }
  canActivate(): Observable<boolean> {
       return this.utilyT.currentUser$.pipe(
         map(user => {
           if(user) return true
           else return false
         })
       )
  }

}
