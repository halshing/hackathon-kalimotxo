import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { OrganizationGuard } from './organization.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [OrganizationGuard],

    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'organization-profile/:orgId',
        component: OrganizationProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationRoutingModule {}
