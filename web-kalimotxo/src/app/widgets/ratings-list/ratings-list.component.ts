import { Component, Input, OnInit } from '@angular/core';
import { Rating } from '@app/models/rating';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.less'],
})
export class RatingsListComponent implements OnInit {
  @Input()
  bartender_ratings_list: Rating[];

  constructor() {}

  ngOnInit() {}
  createRange(number) {
    const items = [];
    for (let i = 1; i <= 5; i++) {
      if (number > 0) {
        items.push(true);
      } else {
        items.push(false);
      }
      number--;
    }
    return items;
  }
}
