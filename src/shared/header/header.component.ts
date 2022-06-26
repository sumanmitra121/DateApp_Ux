import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { userDtls } from 'src/Model/userDtls';
import { UtilityService } from 'src/utilyT/-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Input() _title:string;
 _display_form_flag:string = 'L';
 IsLoggedIn$:Observable<userDtls>;
  constructor(public utilyT:UtilityService) {}
  ngOnInit(): void {this.IsLoggedIn$ = this.utilyT.currentUser$;}
  logout(){this.utilyT.logout();}
}
