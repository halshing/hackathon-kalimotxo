import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ngx-loading-bar [includeSpinner]="false"></ngx-loading-bar>
  <p-growl [(value)]="messages"></p-growl>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  messages: any;
}
