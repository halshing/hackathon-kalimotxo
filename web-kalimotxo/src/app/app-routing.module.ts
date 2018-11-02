import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: '/kalimotxo/hall-of-fame', pathMatch: 'full' }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      // enableTracing: true // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
