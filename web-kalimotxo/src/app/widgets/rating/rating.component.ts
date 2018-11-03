import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.less'],
})
export class RatingComponent implements OnInit {
  @Input()
  rating: number;

  @Input()
  readonly: boolean;

  @Output()
  ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;

  ngOnInit() {
    this.rating = Math.trunc(this.rating);
  }

  onClick(rating: number): void {
    if (!this.readonly) {
      this.rating = rating;
      this.ratingClick.emit({
        rating,
      });
    }
  }
}
