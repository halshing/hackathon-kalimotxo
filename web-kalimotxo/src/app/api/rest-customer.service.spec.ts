import { TestBed } from '@angular/core/testing';

import { RestCustomerService } from './rest-customer.service';

describe('RestCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestCustomerService = TestBed.get(RestCustomerService);
    expect(service).toBeTruthy();
  });
});
