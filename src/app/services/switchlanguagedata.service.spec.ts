import { TestBed } from '@angular/core/testing';

import { SwitchlanguagedataService } from './switchlanguagedata.service';

describe('SwitchlanguagedataService', () => {
  let service: SwitchlanguagedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchlanguagedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
