import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { LocalStorageService } from './localStorage.service';
import { NotificationService } from './notification.service';
import { UserService } from './user.service';
@NgModule({
  imports: [CommonModule],
  providers: [AuthenticationService, LocalStorageService, NotificationService, UserService],

  declarations: [],
})
export class ServicesModule {}
