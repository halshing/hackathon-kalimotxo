import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from '../services/authentication.service';
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ClarityModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthModule { }
