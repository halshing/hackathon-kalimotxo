import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

import { User } from '../models/users';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private API_URL = environment.api_url;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(loginDetails: any) {
      return this.http.post(`${this.API_URL}signIn`, loginDetails);

    }
    // register(user: User) {
    //   return this.http.post(`${this.API_URL}createUser`, user);
    //  }

    logout() {
      return this.http.post(`${this.API_URL}signOut`, {});
    }
}
