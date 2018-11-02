import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HallOfFameComponent } from './hall-of-fame/hall-of-fame.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule, PagesRoutingModule],
  declarations: [HallOfFameComponent],
})
export class PagesModule {}
