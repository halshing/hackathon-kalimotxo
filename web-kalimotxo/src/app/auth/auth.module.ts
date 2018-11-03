import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from '@app/services/services.module';
import { ClarityModule } from '@clr/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ClarityModule, FormsModule, ServicesModule, ReactiveFormsModule],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
