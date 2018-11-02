import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CustomerModule } from './customer/customer.module';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule, ClarityModule, PagesRoutingModule, CustomerModule],

  declarations: [HallOfFameComponent, LayoutComponent],
})
export class PagesModule {}
