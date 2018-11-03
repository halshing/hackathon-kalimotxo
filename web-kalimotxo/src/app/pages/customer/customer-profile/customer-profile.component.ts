import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.less'],
})
export class CustomerProfileComponent implements OnInit {
  customerId;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.customerId = params.customerId));
  }

  ngOnInit() {}
}
