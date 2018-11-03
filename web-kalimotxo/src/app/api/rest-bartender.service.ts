import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestBartenderService {
  constructor(private http: HttpClient) {}
  getBartenderById(bartenderId) {
    return this.http.get(`getBartenderById/${bartenderId}`);
  }
  saveRating(rating) {
    return this.http.post('saveRating', rating);
  }
}
