import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrganizationRoutingModule } from './organization-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class OrganizationModule { }
