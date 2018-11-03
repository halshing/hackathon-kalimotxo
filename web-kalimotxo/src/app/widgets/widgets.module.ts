import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BartenderCardComponent } from './bartender-card/bartender-card.component';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  imports: [CommonModule],
  declarations: [RatingComponent, BartenderCardComponent],
  exports: [RatingComponent, BartenderCardComponent],
})
export class WidgetsModule {}
