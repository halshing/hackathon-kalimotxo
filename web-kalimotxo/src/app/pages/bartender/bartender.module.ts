import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesModule } from '@app/services/services.module';
import { BartenderProfileComponent } from './bartender-profile/bartender-profile.component';
import { BartenderRoutingModule } from './bartender-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '@app/widgets/widgets.module';
import { ClarityModule } from '@clr/angular';

import { ApiModule } from '@app/api/api.module';

@NgModule({
  imports: [ServicesModule, CommonModule, BartenderRoutingModule, WidgetsModule, ClarityModule,
    FormsModule, ReactiveFormsModule, ApiModule],
  declarations: [BartenderProfileComponent],
})
export class BartenderModule {}
