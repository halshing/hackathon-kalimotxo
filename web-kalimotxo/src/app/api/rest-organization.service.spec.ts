import { TestBed } from '@angular/core/testing';

import { RestOrganizationService } from './rest-organization.service';

describe('RestOrganizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestOrganizationService = TestBed.get(RestOrganizationService);
    expect(service).toBeTruthy();
  });
});
