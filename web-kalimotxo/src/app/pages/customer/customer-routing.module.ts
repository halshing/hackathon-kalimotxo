import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGuard } from './customer.guard';
import { RatingViewComponent } from './rating-view/rating-view.component';

const routes: Routes = [
  {
    path: '',
    component: RatingViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
