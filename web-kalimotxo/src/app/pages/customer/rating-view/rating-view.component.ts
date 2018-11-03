import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bartender } from '@app/models/bartender';
import { Rating } from '@app/models/rating';
import { User } from '@app/models/users';
import { BartenderService } from '@app/services/bartender.service';
import { CustomerService } from '@app/services/customer.service';
import { LocalStorageService } from '@app/services/localStorage.service';
import { NotificationService } from '@app/services/notification.service';

@Component({
  selector: 'app-rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.less'],
})
export class RatingViewComponent implements OnInit {
  loading = true;

  bartender: Bartender;
  bartender_ratings_list: Rating[];

  // ! must
  bartenderId;
  position;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private notification: NotificationService,
    private bartenderService: BartenderService,
    private notificationService: NotificationService,
    private localStorage: LocalStorageService,
  ) {
    this.route.params.subscribe((params) => (this.bartenderId = params.bartenderId));
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position = position;
      });
    } else {
      this.notification.displayError({ name: 'Geolocation is not supported by this browser.' });
    }
    this.getBartender();
  }

  getBartender() {
    this.bartenderService.getBartenderById(this.bartenderId).subscribe((data) => {
      if (data.result.error) {
        this.notificationService.displayError({
          name: data.result.error.message,
          message: data.result.error.code,
        });
      } else {
        this.bartender = data.result.user;
        this.bartender_ratings_list = data.result.ratings;
        this.loading = false;
      }
    });
  }

  submitBartenderRating(bartenderRating) {
    if (bartenderRating.rating === undefined) {
      this.notificationService.displayError({
        name: '',
        message: 'Please rate the bartender',
      });
    } else {
      const rating = {
        customerId: (this.localStorage.getJson('user') as User).userId,
        bartenderId: this.bartender.userId,
        rating: bartenderRating.rating,
        comment: bartenderRating.comment,
        company: this.bartender.company,
        position: { latitude: this.position.coords.latitude, longitude: this.position.coords.longitude },
      };
      this.bartenderService.saveRating(rating);
      this.submitted = true;
      this.getBartender();
    }
  }
}
