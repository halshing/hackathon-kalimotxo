import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetsModule } from '@app/widgets/widgets.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { RatingModule } from 'primeng/primeng';
import { BartenderCardComponent } from './bartender-card/bartender-card.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { QrcodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { RatingViewComponent } from './rating-view/rating-view.component';

@NgModule({
  imports: [RatingModule, CommonModule, CustomerRoutingModule, ZXingScannerModule, WidgetsModule],
  declarations: [QrcodeScannerComponent, RatingViewComponent, BartenderCardComponent],
})
export class CustomerModule {}
