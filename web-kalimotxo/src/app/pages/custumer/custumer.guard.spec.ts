import { async, inject, TestBed } from '@angular/core/testing';

import { CustumerGuard } from './custumer.guard';

describe('CustumerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustumerGuard]
    });
  });

  it('should ...', inject([CustumerGuard], (guard: CustumerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
