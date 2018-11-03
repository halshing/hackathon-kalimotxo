import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BartenderService } from '@app/services/bartender.service';

@Component({
  selector: 'app-bartender-profile',
  templateUrl: './bartender-profile.component.html',
  styleUrls: ['./bartender-profile.component.less'],
})
export class BartenderProfileComponent implements OnInit {
  bartenderId;
  constructor(private route: ActivatedRoute, private bartenderService: BartenderService) {
    this.route.params.subscribe((params) => (this.bartenderId = params.bartenderId));
  }

  ngOnInit() {}
}
