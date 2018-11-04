import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '@app/services/services.module';
import { WidgetsModule } from '@app/widgets/widgets.module';
import { ChartModule } from 'primeng/chart';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { OrganizationRoutingModule } from './organization-routing.module';

@NgModule({
  imports: [ChartModule, WidgetsModule, FormsModule, ServicesModule, CommonModule, OrganizationRoutingModule],
  declarations: [DashboardComponent, OrganizationProfileComponent],
})
export class OrganizationModule {}
