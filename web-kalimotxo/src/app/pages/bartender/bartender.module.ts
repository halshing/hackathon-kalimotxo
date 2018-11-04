import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from '@app/api/api.module';
import { ServicesModule } from '@app/services/services.module';
import { WidgetsModule } from '@app/widgets/widgets.module';
import { ClarityModule } from '@clr/angular';
import { QRCodeModule } from 'angularx-qrcode';
import { BartenderProfileComponent } from './bartender-profile/bartender-profile.component';
import { BartenderRoutingModule } from './bartender-routing.module';

@NgModule({
  imports: [
    ServicesModule,
    QRCodeModule,
    CommonModule,
    BartenderRoutingModule,
    WidgetsModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule,
  ],
  declarations: [BartenderProfileComponent],
})
export class BartenderModule {}
