import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/LogRegAuthentication/card/card.component';

const routes:Routes=[{path:'',component:MemberComponent}]

@NgModule({
  declarations: [
    MemberComponent,CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MemberListModule { }
