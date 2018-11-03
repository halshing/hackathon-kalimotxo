import { TestBed } from '@angular/core/testing';

import { BartenderService } from './bartender.service';

describe('BartenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BartenderService = TestBed.get(BartenderService);
    expect(service).toBeTruthy();
  });
});
