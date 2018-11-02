import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bartender-card',
  templateUrl: './bartender-card.component.html',
  styleUrls: ['./bartender-card.component.less'],
})
export class BartenderCardComponent implements OnInit {
  val = 3;
  user = {
    name: 'Jon',
    profilePicture: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 3,
  };
  constructor() {}

  ngOnInit() {}
}
