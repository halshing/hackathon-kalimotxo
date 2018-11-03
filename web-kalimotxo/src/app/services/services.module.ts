import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiModule } from '@app/api/api.module';
import { BartenderService } from './bartender.service';
import { CustomerService } from './customer.service';
import { LocalStorageService } from './localStorage.service';
import { NotificationService } from './notification.service';
@NgModule({
  imports: [CommonModule, ApiModule],
  providers: [LocalStorageService, NotificationService, CustomerService, BartenderService],
  declarations: [],
})
export class ServicesModule {}
