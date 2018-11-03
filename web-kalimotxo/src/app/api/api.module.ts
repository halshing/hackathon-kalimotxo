import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [httpInterceptorProviders],
})
export class ApiModule {}
