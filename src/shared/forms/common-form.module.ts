import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonformsComponent } from './commonforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthModule } from '../password-strength/password-strength.module';


@NgModule({
  declarations: [
    CommonformsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordStrengthModule,
    FormsModule
  ],
  exports:[CommonformsComponent]
})
export class CommonFormModule { }
