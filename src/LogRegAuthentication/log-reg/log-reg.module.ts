import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/shared/header/header.module';
import { MainComponent} from '../Main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilityService } from 'src/utilyT/-utility.service';
import {ToastrModule,ToastrService} from 'ngx-toastr';
import { GlobalErrorHandlingInterceptor } from 'src/_Interceptor/global-error-handling.interceptor';

const routes: Routes=[{
            path:'',component:MainComponent,

            children:[

              {path:'',redirectTo:'home',pathMatch:"full"},
              {path:'home',loadChildren: ()=> import('../home/home.module').then(m=> m.HomeModule)},
              {path:'member-lists',loadChildren: ()=> import('../member/member-list/member-list.module').then(m => m.MemberListModule)},
              {path:'member-details/:id',loadChildren: ()=> import('../member/member-details/member-details.module').then(m => m.MemberDetailsModule)},
              {path:'lists', loadChildren: () => import('../lists/lists.module').then(m=> m.ListsModule)},
              {path:'messages',loadChildren: ()=> import('../messages/messages.module').then(m => m.MessagesModule)},
              {path:'server-error',loadChildren:()=>import('../../_Error_Module/-server-error/-server-error.module').then(m=>m.ServerErrorModule)}]
            }]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderModule,
    RouterModule.forChild(routes),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  providers: [UtilityService,
    { provide : ToastrService},
    {provide:HTTP_INTERCEPTORS,useClass: GlobalErrorHandlingInterceptor,multi:true}],
  exports: [RouterModule]
})
export class LogRegModule {
  constructor(){}
}
