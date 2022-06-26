import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
        {path:'',redirectTo:'main',pathMatch:"full"},
        {path:'main',loadChildren:() => import('../LogRegAuthentication/log-reg/log-reg.module').then(module => module.LogRegModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
