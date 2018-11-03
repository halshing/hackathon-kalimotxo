import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/models/users';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RestAuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginDetails: any) {
    return this.http.post(`signIn`, loginDetails);
  }
  // register(user: User) {
  //   return this.http.post(`${this.API_URL}createUser`, user);
  //  }

  logout() {
    return this.http.post(`signOut`, {});
  }
}
