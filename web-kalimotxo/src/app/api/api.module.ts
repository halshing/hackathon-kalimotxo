import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { httpInterceptorProviders } from './http-interceptors';
import { RestAuthenticationService } from './rest-authentication.service';
import { RestBartenderService } from './rest-bartender.service';
import { RestCustomerService } from './rest-customer.service';
import { RestOrganizationService } from './rest-organization.service';
import { RestUserService } from './rest-user.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    httpInterceptorProviders,
    RestAuthenticationService,
    RestUserService,
    RestBartenderService,
    RestCustomerService,
    RestOrganizationService,
  ],
})
export class ApiModule {}
