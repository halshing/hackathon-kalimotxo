import { Injectable } from '@angular/core';
import { RestCustomerService } from '@app/api/rest-customer.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private restCustomer: RestCustomerService) {}

  getBartender(bartenderId) {}
  submitRating(rating) {}
}
