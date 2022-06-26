import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _display_form_flag:string = 'G';
  display_mode:boolean = false;
  //  alert= {type:'',msg:''};
  constructor() { }
  dismissible = true;
  ngOnInit(): void {
  }
  showtitleHeader(e){
    this.display_mode = e;
    // this.alert.msg = !e ? 'Registration Successful' : 'registration failed!';
    // this.alert.type = !e ? 'success' : 'danger'
  }

}
