import { TestBed } from '@angular/core/testing';

import { WindowScrollServiceService } from './window-scroll-service.service';

describe('WindowScrollServiceService', () => {
  let service: WindowScrollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowScrollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
