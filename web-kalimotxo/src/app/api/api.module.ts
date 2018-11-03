import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { httpInterceptorProviders } from './http-interceptors';
import { RestBartenderService } from './rest-bartender.service';
import { RestCustomerService } from './rest-customer.service';
import { RestOrganizationService } from './rest-organization.service';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    httpInterceptorProviders,
    AuthenticationService,
    UserService,
    RestBartenderService,
    RestCustomerService,
    RestOrganizationService,
  ],
})
export class ApiModule {}
