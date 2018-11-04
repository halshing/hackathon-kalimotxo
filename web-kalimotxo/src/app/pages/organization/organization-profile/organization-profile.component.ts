import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestCustomerService } from '@app/api/rest-customer.service';
import { RestUserService } from '@app/api/rest-user.service';
import { User } from '@app/models/users';
import { NotificationService } from '@app/services/notification.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.less'],
})
export class OrganizationProfileComponent implements OnInit {
  customerId;
  customer: User;
  customerProfileForm: FormGroup;
  loading = true;
  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private restCustomerService: RestCustomerService,
    private restUserService: RestUserService,
  ) {
    this.route.params.subscribe((params) => (this.customerId = params.customerId));
  }

  ngOnInit() {
    this.customerProfileForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required),
    });
    this.restCustomerService
      .getCustomerById(this.customerId)
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data.result.error) {
            this.notificationService.displayError({
              name: data.result.error.message,
              message: data.result.error.code,
            });
          } else if (data.result.message) {
            this.notificationService.displayError({
              name: data.result.error.message,
              message: data.result.message,
            });
          } else {
            this.customer = data.result.user;
            this.customerProfileForm.patchValue(this.customer);
            this.loading = false;
          }
        },
        (error) => {
          this.notificationService.displayError(error);
        },
      );
  }
  onSubmit() {
    this.restUserService
      .update(this.customerProfileForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data.result.error) {
            this.notificationService.displayError({
              name: data.result.error.message,
              message: data.result.error.code,
            });
          } else {
            this.notificationService.displaySuccess('Customer Profile Updated');
          }
        },
        (error) => {
          this.notificationService.displayError(error);
        },
      );
  }
}
