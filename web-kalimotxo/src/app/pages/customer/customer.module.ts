import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CustomerRoutingModule } from './customer-routing.module';
import { QrcodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { RatingViewComponent } from './rating-view/rating-view.component';

@NgModule({
  imports: [CommonModule, CustomerRoutingModule, ZXingScannerModule],
  declarations: [QrcodeScannerComponent, RatingViewComponent],
})
export class CustomerModule {}
