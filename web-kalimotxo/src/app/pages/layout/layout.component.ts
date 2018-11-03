import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  logout() {
    // this.authenticationService
    //   .logout()
    //   .pipe(first())
    //   .subscribe(
    //     (data) => {
    //       this.router.navigate(['auth/login']);
    //     },
    //     (error) => {
    //       // this.alertService.error(error);
    //     },
    //   );
  }
}
