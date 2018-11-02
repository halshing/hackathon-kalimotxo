import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BartenderModule } from './bartender/bartender.module';
import { CustomerModule } from './customer/customer.module';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { LayoutComponent } from './layout/layout.component';
import { OrganizationModule } from './organization/organization.module';

const routes: Routes = [
  {
    path: 'kalimotxo',
    component: LayoutComponent,
    children: [
      { path: 'hall-of-fame', component: HallOfFameComponent },
      { path: 'customer', loadChildren: () => CustomerModule },
      { path: 'bartender', loadChildren: () => BartenderModule },
      { path: 'organization', loadChildren: () => OrganizationModule },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
