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

  @Input()
  itemId: number;

  @Output()
  ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }
  onClick(rating: number): void {
    if (!this.readonly) {
      this.rating = rating;
      this.ratingClick.emit({
        itemId: this.itemId,
        rating,
      });
    }
  }
}
