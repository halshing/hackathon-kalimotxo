import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGuard } from './customer.guard';
import { QrcodeScannerComponent } from './qrcode-scanner/qrcode-scanner.component';
import { RatingViewComponent } from './rating-view/rating-view.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CustomerGuard],
    children: [
      {
        path: 'rating-view',
        component: RatingViewComponent,
      },
      {
        path: 'qr-scanner',
        component: QrcodeScannerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
