import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BartenderProfileComponent } from './bartender-profile/bartender-profile.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'bartender-profile/:bartenderId', component: BartenderProfileComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BartenderRoutingModule {}
