import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bartender-card',
  templateUrl: './bartender-card.component.html',
  styleUrls: ['./bartender-card.component.less'],
})
export class BartenderCardComponent implements OnInit {
  @Input()
  readonly: boolean;

  @Input()
  bartender: any;

  @Output()
  bartenderRating: EventEmitter<any> = new EventEmitter<any>();

  comment: string;
  rating: number;

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
