import { TestBed } from '@angular/core/testing';

import { DietasServiceService } from './dietas-service.service';

describe('DietasServiceService', () => {
  let service: DietasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
