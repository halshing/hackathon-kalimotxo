import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/models/users';
import { LocalStorageService } from '@app/services/localStorage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
})
export class LayoutComponent implements OnInit {
  currentUser: User;
  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.currentUser = this.localStorageService.getJson('user');
  }
  logout() {
    window.localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
