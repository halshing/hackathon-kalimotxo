import { Component, OnInit } from '@angular/core';
import { Bartender } from '@app/models/bartender';
import { BartenderService } from '@app/services/bartender.service';
import { NotificationService } from '@app/services/notification.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.less'],
})
export class HallOfFameComponent implements OnInit {
  bartenders: Observable<Bartender[]>;

  constructor(private bartenderService: BartenderService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.bartenders = this.bartenderService.getHallofFame().pipe(
      map((res: any) => {
        if (!_.isNull(res.result.users)) {
          return res.result.users;
        } else {
          this.notificationService.displayError({ name: '', message: 'no hall of fame available' });
        }
      }),
    );
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
