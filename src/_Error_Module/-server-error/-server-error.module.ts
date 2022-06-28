import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandlingviewComponent } from './error-handlingview.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[{path:'',component:ErrorHandlingviewComponent}]


@NgModule({
  declarations: [
    ErrorHandlingviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServerErrorModule { }
