import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { member } from 'src/Model/member';
import { showMessage } from 'src/Model/showAlertmsg';
import { userDtls } from 'src/Model/userDtls';
import { UtilityService } from 'src/utilyT/-utility.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css','../member-details/member-details.component.css']
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editForm') editForm:NgForm;
  member:member;
  user:userDtls;
  @HostListener('window:beforeunload',['$event']) unloadNotification($event:any){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }
  constructor(private utilyT:UtilityService) {
       this.utilyT.currentUser$.pipe(take(1)).subscribe(res=> this.user = res);
  }

  ngOnInit(): void {
    this.loadMember();
  }

   loadMember(){
     this.utilyT._memberByname('users',this.user.userName).subscribe(res => {
       this.member = res;
       console.log(res);

     })
   }
   updatesmember(){
     console.log(this.member);
     const _alert = new showMessage;
     _alert.msg = 'Profile Updated Successfully',
     _alert.type = 'S',
     _alert.dismissible= true
     this.utilyT.showToastr(_alert);
     this.editForm.reset(this.member);
     }
}
