import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { BartenderCardComponent } from './bartender-card/bartender-card.component';
import { RatingComponent } from './rating/rating.component';
import { RatingsListComponent } from './ratings-list/ratings-list.component';
@NgModule({
  imports: [FormsModule, CommonModule, ClarityModule, ClrFormsNextModule],
  declarations: [RatingComponent, BartenderCardComponent, RatingsListComponent],
  exports: [RatingComponent, BartenderCardComponent, RatingsListComponent],
})
export class WidgetsModule {}
