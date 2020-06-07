import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./helpers/authentication.service";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthenticationService,
  ]
})
export class AuthenticationModule { }
