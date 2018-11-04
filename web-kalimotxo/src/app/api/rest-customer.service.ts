import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestCustomerService {
  constructor(private http: HttpClient) {}

  getCustomerById(customerId) {
    return this.http.get(`getCustomerById/${customerId}`);
  }
}
