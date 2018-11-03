import { Component, OnInit } from '@angular/core';
import { BartenderService } from '../../services/bartender.service';

import { first } from 'rxjs/operators';

import { Router } from '@angular/router';
import { Bartender } from '../../models/bartender';
@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.less']
})
export class HallOfFameComponent implements OnInit {
  bartenders: Bartender[] = [];

  constructor(
    private bartenderservice: BartenderService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.bartenderservice.getBartenders()
      .pipe(first())
      .subscribe(
            data => {
              this.bartenders = data.result.users;
            },
            error => {
                // this.alertService.error(error);
                this.router.navigate(['/kalimotxo/customer']);

                // this.loading = false;
            });
  }

}
