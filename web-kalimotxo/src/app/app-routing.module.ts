import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: '', redirectTo: '/kalimotxo/hall-of-fame', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule',
  },
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
