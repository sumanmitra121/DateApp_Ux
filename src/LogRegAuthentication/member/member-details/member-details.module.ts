import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailsComponent } from './member-details.component';
import {RouterModule, Routes } from '@angular/router';

const routes : Routes=[{path:'',component:MemberDetailsComponent}]


@NgModule({
  declarations: [
    MemberDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MemberDetailsModule { }
