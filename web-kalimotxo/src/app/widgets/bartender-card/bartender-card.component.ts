import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@app/models/users';

@Component({
  selector: 'app-bartender-card',
  templateUrl: './bartender-card.component.html',
  styleUrls: ['./bartender-card.component.less'],
})
export class BartenderCardComponent implements OnInit {
  @Input()
  readonly: boolean;

  @Input()
  bartender: User;

  @Output()
  bartenderRating: EventEmitter<any> = new EventEmitter<any>();

  comment: string;
  rating: number;

  @Input()
  submitted;

  constructor() {}

  ngOnInit() {}

  ratingComponentClick(clickObj: any): void {
    this.rating = clickObj.rating;
  }

  saveRating() {
    this.bartenderRating.emit({
      comment: this.comment,
      rating: this.rating,
    });
  }
}
