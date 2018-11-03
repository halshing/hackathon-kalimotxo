import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/models/users';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getCurrentUser() {
    return this.http.get(`currentUser`);
  }

  register(user: User) {
    return this.http.post(`createUser`, user);
  }

  update(user: User) {
    return this.http.post(`updateUserProfile`, user);
  }
}
