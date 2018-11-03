import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestAuthenticationService } from '@app/api/rest-authentication.service';
import { LocalStorageService } from '@app/services/localStorage.service';
import { NotificationService } from '@app/services/notification.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private restAuthenticationService: RestAuthenticationService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.restAuthenticationService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {
          if (data.result.error) {
            this.notificationService.displayError({
              name: data.result.error.message,
              message: data.result.error.code,
            });
          } else {
            this.localStorageService.setJson('user', data.result.user);
            this.router.navigate(['/']);
          }
        },
        (error) => {
          this.notificationService.displayError(error);
        },
      );
  }
}
