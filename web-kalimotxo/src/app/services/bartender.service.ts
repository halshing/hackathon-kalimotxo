import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Bartender } from '../models/bartender';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BartenderService {
  private API_URL = environment.api_url;

  constructor(private http: HttpClient) { }

  getBartenders() {
    return this.http.get(`${this.API_URL}getAllBartenders`);
  }

  constructor() { }
}
