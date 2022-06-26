import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/shared/header/header.module';
import { MainComponent} from '../Main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { UtilityService } from 'src/utilyT/-utility.service';

const routes: Routes=[{
            path:'',component:MainComponent,
            children:[
              {path:'',redirectTo:'home',pathMatch:"full"},
              {path:'home',loadChildren: ()=> import('../home/home.module').then(m=> m.HomeModule) }]
            }]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderModule,
    RouterModule.forChild(routes)
  ],
  providers: [UtilityService],
  exports: [RouterModule]
})
export class LogRegModule {
  constructor(){console.log("logreg Module Work")}
}
