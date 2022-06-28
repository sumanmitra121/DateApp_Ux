import { Component, OnInit } from '@angular/core';
import { member } from 'src/Model/member';
import { UtilityService } from 'src/utilyT/-utility.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  members:member[]=[];
  constructor(private utilyT:UtilityService) { }

  ngOnInit(): void {
    this.loadMembers();
  }
  loadMembers(){
    this.utilyT._memberlist('users').subscribe(res=>{
      this.members =  res;
      console.log(this.members);
    })
  }

}
