import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-profile',
  templateUrl: './organization-profile.component.html',
  styleUrls: ['./organization-profile.component.less'],
})
export class OrganizationProfileComponent implements OnInit {
  orgId;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.orgId = params.orgId));
  }
  ngOnInit() {}
}
