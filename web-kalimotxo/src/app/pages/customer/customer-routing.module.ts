import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerGuard } from './customer.guard';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { QrcodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { RatingViewComponent } from './rating-view/rating-view.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CustomerGuard],
    children: [
      {
        path: 'rating-view/:bartenderId',
        component: RatingViewComponent,
      },
      {
        path: 'customer-profile/:customerId',
        component: CustomerProfileComponent,
      },
      {
        path: 'qr-scanner',
        component: QrcodeScannerComponent,
      },
      {
        path: 'heat-map',
        component: HeatMapComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
