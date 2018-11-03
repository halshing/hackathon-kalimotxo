import { TestBed } from '@angular/core/testing';

import { RestBartenderService } from './rest-bartender.service';

describe('RestBartenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestBartenderService = TestBed.get(RestBartenderService);
    expect(service).toBeTruthy();
  });
});
