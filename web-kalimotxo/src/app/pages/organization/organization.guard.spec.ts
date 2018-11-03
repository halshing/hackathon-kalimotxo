import { async, inject, TestBed } from '@angular/core/testing';

import { OrganizationGuard } from './organization.guard';

describe('OrganizationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationGuard]
    });
  });

  it('should ...', inject([OrganizationGuard], (guard: OrganizationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
