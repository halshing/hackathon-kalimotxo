import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'kalimotxo',
    component: LayoutComponent,
    children: [
      { path: 'hall-of-fame', component: HallOfFameComponent },
      { path: 'customer', loadChildren: './customer/customer.module.ts#CustomerModule' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
