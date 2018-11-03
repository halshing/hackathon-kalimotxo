import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CustomerService } from './customer.service';
import { LocalStorageService } from './localStorage.service';
import { NotificationService } from './notification.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthenticationService, LocalStorageService, NotificationService, CustomerService],
  declarations: [],
})
export class ServicesModule {}
