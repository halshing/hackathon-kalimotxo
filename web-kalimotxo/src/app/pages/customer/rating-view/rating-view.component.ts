import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '@app/services/customer.service';
import { NotificationService } from '@app/services/notification.service';

@Component({
  selector: 'app-rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.less'],
})
export class RatingViewComponent implements OnInit {
  // ! mock
  bartender = {
    id: 123,
    name: 'Jon',
    profilePicture: 'https://randomuser.me/api/portraits/men/61.jpg',
    rating: 3,
  };
  bartender_ratings_list;

  // ! must
  bartenderId;
  position;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private notification: NotificationService,
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
    this.customerService.getBartender(this.bartenderId);
  }

  submitBartenderRating(bartenderRating) {
    bartenderRating.bartenderId = this.bartenderId;
    bartenderRating.position = this.position;
    console.log(bartenderRating);
  }
}
