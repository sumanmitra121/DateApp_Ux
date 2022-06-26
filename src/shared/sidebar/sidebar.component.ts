import { Component, OnInit } from '@angular/core';
import { menu } from 'src/Model/menu';
import { UtilityService } from 'src/utilyT/-utility.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus:menu[] = [];
  constructor(private utilyT:UtilityService) { }

  ngOnInit(): void {
  this.utilyT.getmenus().subscribe(res=>{
      this.menus = res;
  })
  }

}
