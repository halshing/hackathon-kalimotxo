import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesModule } from '@app/services/services.module';
import { WidgetsModule } from '@app/widgets/widgets.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { GMapModule } from 'primeng/gmap';
import { CustomerRoutingModule } from './customer-routing.module';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { QrcodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { RatingViewComponent } from './rating-view/rating-view.component';

@NgModule({
  imports: [CommonModule, CustomerRoutingModule, ZXingScannerModule, WidgetsModule, ServicesModule, GMapModule],
  declarations: [QrcodeScannerComponent, RatingViewComponent, HeatMapComponent],
})
export class CustomerModule {}
