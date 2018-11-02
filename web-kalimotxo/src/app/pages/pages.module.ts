import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule, ClarityModule, PagesRoutingModule],

  declarations: [HallOfFameComponent, LayoutComponent],
})
export class PagesModule {}
