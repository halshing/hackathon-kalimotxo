import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/kalimotxo/home', pathMatch: 'full' },
  { path: 'kalimotxo/home', component: LayoutComponent },
];

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
