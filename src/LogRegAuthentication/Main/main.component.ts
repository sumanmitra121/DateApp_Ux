import { Component, OnInit } from '@angular/core';
import { userDtls } from 'src/Model/userDtls';
import { UtilityService } from 'src/utilyT/-utility.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  _title_of_the_project:string = "Dating App";
  constructor(private utilyT:UtilityService) { }
  ngOnInit(): void {this.setCurrentUser();}
  setCurrentUser(){
    const user:userDtls = JSON.parse(localStorage.getItem('user'));
    this.utilyT._isLoggedIn.next(user);
  }
}
