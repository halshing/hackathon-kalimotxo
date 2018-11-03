import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.less'],
})
export class RatingsListComponent implements OnInit {
  @Input()
  bartender_ratings_list: any;

  constructor() {}

  ngOnInit() {}
}
