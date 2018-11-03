import { Component, OnInit } from '@angular/core';
import { Bartender } from '@app/models/bartender';
import { BartenderService } from '@app/services/bartender.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.less'],
})
export class HallOfFameComponent implements OnInit {
  bartenders: Observable<Bartender[]>;

  constructor(private bartenderService: BartenderService) {}

  ngOnInit() {
    this.bartenders = this.bartenderService.getHallofFame();
  }

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
