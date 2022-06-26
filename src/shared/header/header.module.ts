import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CommonFormModule } from '../forms/common-form.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SidebarModule } from '../sidebar/sidebar.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CommonFormModule,
    SidebarModule,
    BsDropdownModule.forRoot(),
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
