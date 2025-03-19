import { TestBed } from '@angular/core/testing';

import { PreventScrollingService } from './prevent-scrolling.service';

describe('PreventScrollingService', () => {
  let service: PreventScrollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreventScrollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
