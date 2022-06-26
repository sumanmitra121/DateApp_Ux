import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes=[{path:'',component:ListsComponent}]



@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListsModule { }
