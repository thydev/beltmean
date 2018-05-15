import { TestBed, inject } from '@angular/core/testing';

import { BeltService } from './belt.service';

describe('BeltService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeltService]
    });
  });

  it('should be created', inject([BeltService], (service: BeltService) => {
    expect(service).toBeTruthy();
  }));
});
