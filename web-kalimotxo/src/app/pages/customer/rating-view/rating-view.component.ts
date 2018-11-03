import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => console.log(params));
  }

  ngOnInit() {}
}
