import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonFormModule } from 'src/shared/forms/common-form.module';
import { AlertModule } from 'ngx-bootstrap/alert';
 const route:Routes= [{path:'',component:HomeComponent}]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CommonFormModule,
    AlertModule.forRoot(),
    RouterModule.forChild(route)
  ],
  exports:[RouterModule]
})
export class HomeModule {
  constructor(){console.log("HomeModule Loaded")}
 }
