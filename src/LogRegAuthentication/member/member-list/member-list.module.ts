import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[{path:'',component:MemberComponent}]

@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MemberListModule { }
