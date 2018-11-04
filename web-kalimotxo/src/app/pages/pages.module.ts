import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '@app/services/services.module';
import { ClarityModule } from '@clr/angular';
import { CustomerModule } from './customer/customer.module';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [FormsModule, CommonModule, ClarityModule, PagesRoutingModule, CustomerModule, ServicesModule],

  declarations: [HallOfFameComponent, LayoutComponent],
})
export class PagesModule {}
