import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { BartenderCardComponent } from './bartender-card/bartender-card.component';
import { RatingComponent } from './rating/rating.component';
@NgModule({
  imports: [FormsModule, CommonModule, ClarityModule, ClrFormsNextModule],
  declarations: [RatingComponent, BartenderCardComponent],
  exports: [RatingComponent, BartenderCardComponent],
})
export class WidgetsModule {}
