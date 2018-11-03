import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BartenderService } from '@app/services/bartender.service';
import { LocalStorageService } from '@app/services/localStorage.service';
import { NotificationService } from '@app/services/notification.service';
import { first } from 'rxjs/operators';
import { Bartender } from '../../../models/bartender';
import { Rating } from '../../../models/rating';
import { Router } from '@angular/router';

import { RestUserService } from '@app/api/rest-user.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bartender-profile',
  templateUrl: './bartender-profile.component.html',
  styleUrls: ['./bartender-profile.component.less'],
})
export class BartenderProfileComponent implements OnInit {
  bartenderId;
  bartender: Bartender;
  ratings: Rating[];
  bartenderProfileForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private bartenderService: BartenderService,
              private notificationService: NotificationService,
              private localStorageService: LocalStorageService,
              private restUserService: RestUserService,
              private router: Router) {
    this.route.params.subscribe((params) => (this.bartenderId = params.bartenderId));
  }

  ngOnInit() {
    this.bartenderProfileForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      userType: new FormControl('', Validators.required),
      userId: new FormControl('', Validators.required)
    });
    this.bartenderService
    .getBartenderById(this.bartenderId)
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
          this.bartender = data.result.user;
          this.bartenderProfileForm.patchValue(this.bartender);
          this.ratings = data.result.ratings;
        }
      },
      (error) => {
        this.notificationService.displayError(error);
      },
    );
  }
  onSubmit() {
    this.restUserService
    .update(this.bartenderProfileForm.value)
    .pipe(first())
    .subscribe(
      (data: any) => {
        if (data.result.error) {
          this.notificationService.displayError({
            name: data.result.error.message,
            message: data.result.error.code,
          });
        } else {
          // Success
          this.notificationService.displaySuccess('User Profile Updated');
        }
      },
      (error) => {
        this.notificationService.displayError(error);
      },
    );  }
}
