import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestUserService } from '@app/api/rest-user.service';
import { NotificationService } from '@app/services/notification.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userTypes: string[] = ['Customer', 'Bartender', 'Business'];
  defaultUserType = 'Customer';

  constructor(
    private router: Router,
    private restUserService: RestUserService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.restUserService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data.result.error) {
            this.notificationService.displayError({
              name: data.result.error.message,
              message: data.result.error.code,
            });
          } else {
            this.router.navigate(['/auth/login']);
          }
        },
        (error) => {
          this.notificationService.displayError(error);
        },
      );
  }
}
