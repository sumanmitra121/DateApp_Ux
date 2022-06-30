import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { menu } from 'src/Model/menu';
import { userDtls } from 'src/Model/userDtls';
import {ToastrService} from 'ngx-toastr';
import { showMessage } from 'src/Model/showAlertmsg';
import { member } from 'src/Model/member';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  public  _isLoggedIn= new ReplaySubject<userDtls>(1);
  currentUser$ = this._isLoggedIn.asObservable();
  constructor(private http:HttpClient,private router:Router,private toastr:ToastrService) { }

  clientCallApi(_apiName:string,_flag:any,dt:any){
    if(_flag == 'P'){
    return this.http.post(environment.url+_apiName,dt);
    }
    else{
      return this.http.get(environment.url+_apiName);
    }

  }

  _memberlist(_apiName:any){
    return this.http.get<member[]>(environment.url+_apiName);
  }
  _memberByname(_apiName:any,_uname:any){
    return this.http.get<member>(environment.url+_apiName+'/'+_uname);
  }
  // getIsLoggedIn():Observable<userDtls>{return this._isLoggedIn.asObservable()}
  setIsLoggedIn(_user:userDtls){return this._isLoggedIn.next(_user);}
  logout(){
    localStorage.clear();
    this._isLoggedIn.next(null);
    this.router.navigate(['/main/home']);
  }
   getmenus(){return this.http.get<menu[]>('/assets/config/menu.json');}
   showToastr(_alert:showMessage){
     switch(_alert.type){
         case 'S':this.toastr.success(_alert.msg);break;
         case 'D':this.toastr.error(_alert.msg);break;
         case 'W':this.toastr.warning(_alert.msg);break;
     }
   }
}
