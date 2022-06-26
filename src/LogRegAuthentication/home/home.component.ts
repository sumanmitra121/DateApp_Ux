import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/utilyT/-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _display_form_flag:string = 'G';
  display_mode:boolean = false;
  //  alert= {type:'',msg:''};
  constructor(private utilyT:UtilityService) { }
  dismissible = true;
  ngOnInit(): void {
  }
  showtitleHeader(e){
    this.display_mode = e;
  }
  show_page(){
      this.utilyT.clientCallApi('error/server-error','G','').subscribe(res=>{
        console.log(res);
      })
  }

}
