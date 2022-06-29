import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberEditComponent } from './member-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PreventChangesGuard } from 'src/Auth/prevent-changes.guard';

const routes:Routes=[{path:'',component:MemberEditComponent,canDeactivate:[PreventChangesGuard]}]


@NgModule({
  declarations: [
    MemberEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TabsModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class MemberEditModule { }
