import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
