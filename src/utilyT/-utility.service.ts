import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import {Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { menu } from 'src/Model/menu';
import { userDtls } from 'src/Model/userDtls';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public  _isLoggedIn= new ReplaySubject<userDtls>(1);
  currentUser$ = this._isLoggedIn.asObservable();
  constructor(private http:HttpClient,private router:Router) { }

  clientCallApi(_apiName:string,_flag:any,dt:any){
    if(_flag == 'P'){
    return this.http.post(environment.url+_apiName,dt);
    }
    else{
      return this.http.get(environment.url+_apiName);
    }
  }
  // getIsLoggedIn():Observable<userDtls>{return this._isLoggedIn.asObservable()}
  setIsLoggedIn(_user:userDtls){return this._isLoggedIn.next(_user);}
  logout(){
    localStorage.clear();
    this._isLoggedIn.next(null);
    this.router.navigate(['/']);
  }
   getmenus(){
      return this.http.get<menu[]>('/assets/config/menu.json');
  }
}
