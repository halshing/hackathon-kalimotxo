import { Injectable } from '@angular/core';
import { RestBartenderService } from '@app/api/rest-bartender.service';
import { Observable } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable()
export class BartenderService {
  constructor(private restBartenderService: RestBartenderService, private notificationService: NotificationService) {}

  getBartenderById(bartenderId): Observable<any> {
    return this.restBartenderService.getBartenderById(bartenderId);
  }
  saveRating(rating) {
    this.restBartenderService.saveRating(rating).subscribe(
      (data: any) => {
        if (data.result.error) {
          this.notificationService.displayError({
            name: data.result.error.message,
            message: data.result.error.code,
          });
        } else {
          this.notificationService.displaySuccess('Rating saved');
        }
      },
      (err) => {
        this.notificationService.displayError(err);
      },
    );
  }
}
