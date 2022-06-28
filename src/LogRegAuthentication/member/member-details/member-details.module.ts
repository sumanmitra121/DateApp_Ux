import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberDetailsComponent } from './member-details.component';
import {RouterModule, Routes } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
const routes : Routes=[{path:'',component:MemberDetailsComponent}]


@NgModule({
  declarations: [
    MemberDetailsComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class MemberDetailsModule { }
