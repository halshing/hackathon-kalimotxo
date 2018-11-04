import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RestBartenderService {
  constructor(private http: HttpClient) {}
  getBartenderById(bartenderId) {
    return this.http.get(`getBartenderById/${bartenderId}`);
  }
  saveRating(rating) {
    return this.http.post('saveRating', rating);
  }
  getHallofFame(): Observable<any> {
    return this.http.get('getTopBartenders');
  }
  getAllRatings(): Observable<any> {
    return this.http.get('getAllRatings');
  }
}
