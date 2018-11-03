import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesModule } from '@app/services/services.module';
import { BartenderProfileComponent } from './bartender-profile/bartender-profile.component';
import { BartenderRoutingModule } from './bartender-routing.module';

@NgModule({
  imports: [ServicesModule, CommonModule, BartenderRoutingModule],
  declarations: [BartenderProfileComponent],
})
export class BartenderModule {}
