import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '@app/services/customer.service';

@Component({
  selector: 'app-rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.less'],
})
export class RatingViewComponent implements OnInit {
  bartender = {
    id: 123,
    name: 'Jon',
    profilePicture: 'https://randomuser.me/api/portraits/men/61.jpg',
    rating: 3,
  };
  bartender_ratings_list;
  bartenderId;
  constructor(private route: ActivatedRoute, private customerService: CustomerService) {
    this.route.params.subscribe((params) => (this.bartenderId = params.bartenderId));
  }

  ngOnInit() {
    this.customerService.getBartender(this.bartenderId);
  }

  submitBartenderRating(bartenderRating) {
    bartenderRating.bartenderId = this.bartenderId;
    console.log(bartenderRating);
  }
}
