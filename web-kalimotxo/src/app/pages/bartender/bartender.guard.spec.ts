import { async, inject, TestBed } from '@angular/core/testing';

import { BartenderGuard } from './bartender.guard';

describe('BartenderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BartenderGuard]
    });
  });

  it('should ...', inject([BartenderGuard], (guard: BartenderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
