import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

import { User } from '../models/users';

@Injectable({ providedIn: 'root' })
export class UserService {
  private API_URL = environment.api_url;

    constructor(private http: HttpClient) { }

    getCurrentUser() {
        return this.http.get(`${this.API_URL}currentUser`);
    }

    register(user: User) {
        return this.http.post(`${this.API_URL}createUser`, user);
    }

    update(user: User) {
        return this.http.post(`${this.API_URL}updateUserProfile`, user);
    }
}
