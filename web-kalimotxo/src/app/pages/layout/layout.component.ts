import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { first } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    ) { }

  ngOnInit() {

  }
  logout() {
    this.authenticationService.logout()
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['auth/login']);
            },
            error => {
                // this.alertService.error(error);
            });
  }

}
