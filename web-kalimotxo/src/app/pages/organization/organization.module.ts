import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { OrganizationRoutingModule } from './organization-routing.module';

@NgModule({
  imports: [CommonModule, OrganizationRoutingModule],
  declarations: [DashboardComponent, OrganizationProfileComponent],
})
export class OrganizationModule {}
