import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { member } from 'src/Model/member';
import { UtilityService } from 'src/utilyT/-utility.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  member:member;
  constructor(private utilyT:UtilityService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadmember();
  }
   loadmember(){
     this.utilyT._memberByname('users',this.route.snapshot.paramMap.get('_u_name')).subscribe(member => {
       this.member =member;
     })
   }
}
